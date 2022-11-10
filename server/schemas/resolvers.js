const { AuthenticationError } = require('apollo-server-express');
const { User, Account } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('acounts');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('accounts');
    },
    accounts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Account.find(params).sort({ createdAt: -1 });
    },
    account: async (parent, { accountId }) => {
      return Account.findOne({ _id: accountId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('accounts');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    categories: async () => {
      return await Category.find();
    },
    products: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name
        };
      }

      return await Product.find(params).populate('category');
    },
    product: async (parent, { _id }) => {
      return await Product.findById(_id).populate('category');
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.products',
          populate: 'category'
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError('Not logged in');
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ products: args.products });
      const line_items = [];

      const { products } = await order.populate('products');

      for (let i = 0; i < products.length; i++) {
        const product = await stripe.products.create({
          name: products[i].name,
          description: products[i].description,
          images: [`${url}/images/${products[i].image}`]
        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: 'usd',
        });

        line_items.push({
          price: price.id,
          quantity: 1
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`
      });

      return { session: session.id };
    }
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addAccount: async (parent, { gamerName, gameNote }, context) => {
      if (context.user) {
        const account = await Account.create({
          gamerName,
          gameNote,
          
          username: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { accounts: account._id } }
        );

        return account;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addFriend: async (parent, { accountId, friendName, friendNote }, context) => {
      if (context.user) {
        return Account.findOneAndUpdate(
          { _id: accountId },
          {
            $addToSet: {
              friends: { friendName, friendNote: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeAccount: async (parent, { accountId }, context) => {
      if (context.user) {
        const account = await Account.findOneAndDelete({
          _id: accountId,
          username: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { accounts: account._id } }
        );

        return account;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeFriend: async (parent, { accountId, friendId }, context) => {
      if (context.user) {
        return Account.findOneAndUpdate(
          { _id: accountId },
          {
            $pull: {
              friends: {
                _id: friendId,
                username: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addOrder: async (parent, { products }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ products });

        await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

        return order;
      }

      throw new AuthenticationError('Not logged in');
    },
    updateProduct: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Product.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
    },
  },
};

module.exports = resolvers;
