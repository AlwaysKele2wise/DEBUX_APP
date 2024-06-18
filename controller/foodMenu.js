const Menu = require("../models/food")

// const Menu = require('./Menu'); // Assuming Menu is the model created from the menuSchema

// Function to create a new menu item
async function createMenuItem(dishData) {
  try {
    // Create a new menu document
    const menu = new Menu({
      dishes: [dishData] // Add the dish data to the dishes array
    });

     // Example usage

  
    // Save the menu document to the database
    const savedMenu = await menu.save();
    console.log('Menu item created:', savedMenu);

    
  } catch (error) {
    console.error('Error creating menu item:', error);
  }
}

// Function to retrieve all menu items
async function getMenuItems() {
    try {
      // Find all menus and return only the dishes array
      const menus = await Menu.find({}, 'dishes');
      console.log('Menu items retrieved:', menus);
    } catch (error) {
      console.error('Error retrieving menu items:', error);
    }
  }
  
 


  module.exports = { createMenuItem, getMenuItems };
  
