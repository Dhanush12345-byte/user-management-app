const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Get all users
router.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Add new user
router.post('/', async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.json(newUser);
});

// Update user
router.put('/:id', async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedUser);
});

// Delete user
router.delete('/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: 'User deleted' });
});

module.exports = router;
