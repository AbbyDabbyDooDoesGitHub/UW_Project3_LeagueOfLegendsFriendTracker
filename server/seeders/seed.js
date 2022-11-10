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
    { name: 'Food' },
    { name: 'Household Supplies' },
    { name: 'Electronics' },
    { name: 'Books' },
    { name: 'Toys' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Tin of Cookies',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      category: categories[0]._id,
      price: 2.99,
      quantity: 500
    },
    {
      name: 'Canned Coffee',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'canned-coffee.jpg',
      category: categories[0]._id,
      price: 1.99,
      quantity: 500
    },
  ]);
  
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
