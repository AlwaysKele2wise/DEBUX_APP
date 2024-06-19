const mongoose = require('mongoose');

const ordersSchema = new mongoose.Schema({
  dishIds: [
    { type: mongoose.Schema.Types.ObjectId, 
    ref: 'Dish' }
],
  foods: [
    { type: mongoose.Schema.Types.ObjectId, 
    ref: 'Food' }
    ],
  customerId: String,
  customerName: String,
  // Add other relevant fields (e.g., address, payment details, etc.)
},
  {timestamps: true }
);

const Order = mongoose.model('Orders', ordersSchema);

module.exports = Order;
