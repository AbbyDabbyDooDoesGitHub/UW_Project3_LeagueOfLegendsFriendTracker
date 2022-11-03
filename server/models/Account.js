const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const accountsSchema = new Schema({
  gameUsername: {
    type: String,
    required: 'you need to have a league of legends username!',
    minlength: 1,
    maxlength: 20,
    trim: true,
  },
 gameNotes : {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  friendsAdded: [
    {
      type: String,
      trim: true,
    },
],
//   comments: [
//     {
//       commentText: {
//         type: String,
//         required: true,
//         minlength: 1,
//         maxlength: 280,
//       },
//       commentAuthor: {
//         type: String,
//         required: true,
//       },
//       createdAt: {
//         type: Date,
//         default: Date.now,
//         get: (timestamp) => dateFormat(timestamp),
//       },
//     },
//   ],
});

const Account = model('Account', accountsSchema);

module.exports = Account;
