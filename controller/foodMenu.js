const Menu = require("../models/food");
const StatusCodes = require("../statuscodes");
const orderModel = require("../models/orderModel");


//create item
const createMenuItems = async (itemData, res, req) => {
  try {
    const menuItem = new Menu(itemData);
    const savedItem = await menuItem.save(req.savedItem);
    console.log('Menu item saved:', savedItem);
    res.status(StatusCodes.CREATED).json({
      message: "food added successfully",
    });
  } catch (err) {
    console.error('Error saving menu item:', err);
  }
};

createMenuItems({name: 'Yam', description: 'A good one with pepper sauce', price: 60.56});

//Get item
const getMenuItems = async (req, res) => {
  try {
    const menuItems = await Menu.find(req.body) 
    res.status(StatusCodes.CREATED).json({
      message: "food added successfully",
      data: menuItems,
    });
  } catch (err) {
    console.error('Error retrieving menu items:', err);
    // res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Error retrieving menu items' });
  }
};

getMenuItems()

//Place Order
const placeOrder = async (req,res) => {
  try {
    // Example: Accept dish IDs and customer name
const newOrder = new orderModel({
});
  
 const savedOrder  = await newOrder.save(req.savedOrder);
 res.status(StatusCodes.CREATED).json({
  message: "Order saved successfully",
  data: savedOrder,
});
  } catch (error) {
    console.log(error)
    res.status (500).send({})
  }

};
module.exports = {createMenuItems, getMenuItems, placeOrder}