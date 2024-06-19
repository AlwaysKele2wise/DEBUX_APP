const Menu = require("../models/food")


const createMenuItems = async (itemData) => {
  try {
    const menuItem = new Menu(itemData);
    const savedItem = await menuItem.save();
    console.log('Menu item saved:', savedItem);
  } catch (err) {
    console.error('Error saving menu item:', err);
  }
};

createMenuItems({});


const getMenuItems = async () => {
  try {
    const menuItems = await Menu.find();
    console.log('Menu items retrieved:', menuItems);
  } catch (err) {
    console.error('Error retrieving menu items:', err);
  }
};

getMenuItems();



module.exports = {createMenuItems, getMenuItems}