const db = require('../config/connection');
const { User, Account, Product, Category } = require('../models');
const userSeeds = require('./userSeeds.json');
const accountSeeds = require('./accountSeeds.json');

db.once('open', async () => {
  try {
    await Account.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);
    await Account.create(accountSeeds)

    for (let i = 0; i < accountSeeds.length; i++) {
      const { _id, gamerName } = await Account.create(accountSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: gamerName },
        {
          $addToSet: {
            accounts: _id,
          },
        }
      );
    }

    //Seeding for Stripe
    await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Donations' },
    { name: 'Other' },
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Donate $5.00',
      description:
        'Send a donation of 5 dollars.',
      image: 'cookie-tin.jpg',
      category: categories[0]._id,
      price: 5.00,
    },
    {
      name: 'Donate $10.00',
      description:
        'Send a donation of 10 dollars. Thank you!',
      image: 'canned-coffee.jpg',
      category: categories[0]._id,
      price: 10.00,
    },
    {
      name: 'Increase Friend List Size',
      description:
        'Gain 10 more slots on your friends list.',
      image: 'canned-coffee.jpg',
      category: categories[0]._id,
      price: 2.50,
    },
  ]);

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[1]._id, products[2]._id]
      }
    ]
  });
  
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
