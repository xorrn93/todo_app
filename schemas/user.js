const mongoose = require('mongoose');

const { Schema } = mongoose;
const userSchema = new Schema({
  name : {
    type: String,
    required : true,
  },
  date : {
    type: Number,
    required: true,
  },
  checked: {
    type: String,
    required : true,
    default : 'on',
  },
  createdAt : {
    type: Date,
    default : Date.now,
  },
});

module.exports = mongoose.model('User',userSchema);
