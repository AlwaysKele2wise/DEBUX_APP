
const mongoose = require('mongoose');
const { db } = require('../config/envConfig');
const menuSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number

},
  {
    sequelize:db,
    tableName:"food"
  }

);

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;
