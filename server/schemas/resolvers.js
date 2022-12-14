const { AuthenticationError } = require('apollo-server-express');
const { isConstValueNode } = require('graphql');
const { User, Account } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('accounts');
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
          { $addToSet: { accounts: account.gamerName } }
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
              friends: {  username: context.user.username,  friendName, friendNote },
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
     console.log(accountId, friendId)
      if (context.user) {
        return Account.findOneAndUpdate(
          { _id: accountId },
          {
            $pull: {
               friends: {
                _id: friendId,
                // username: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
