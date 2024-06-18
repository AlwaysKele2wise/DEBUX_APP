const mongoose = require('mongoose');

// Schema for a single dish
const dishSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Dish name is required'],
  },
  description: {
    type: String,
    required: [true, 'Dish description is required'],
  },
  price: {
    type: Number,
    required: [true, 'Dish price is required'],
    min: [0, 'Dish price cannot be negative'],
  }
});

// Schema for the menu which contains multiple dishes
const menuSchema = new mongoose.Schema({
  dishes: [dishSchema]
});

// Create the model from the schema
const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;
