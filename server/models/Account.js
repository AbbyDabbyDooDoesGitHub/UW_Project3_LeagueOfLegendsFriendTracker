const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const accountsSchema = new Schema({

    gameNote : {
        type: String,
        required: true,
        trim: true,
      },
     
    gamerName: {
        type: String,
        required: 'you need to have a league of legends username!',
        minlength: 1,
        maxlength: 20,
        trim: true,
      },
 


  IRL: {
    type: Boolean,
    required: true,
    default: false
},

uniqueID: {
    type: Number,
    required: true,
   unique: true
},
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  accounts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Account',
    },
  ],

});

const Account = model('Account', accountsSchema);

module.exports = Account;
