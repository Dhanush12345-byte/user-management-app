const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String, required: true, match: /^[0-9]{10}$/ },
  email: { type: String, required: true, unique: true, match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ },
  address: { type: String, required: true }
});

module.exports = mongoose.model('User', UserSchema);
