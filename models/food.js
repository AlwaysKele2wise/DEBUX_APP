
const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  item: String,
  description: String,
  price: Number
});

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;
