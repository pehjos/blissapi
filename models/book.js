

import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  
    area: String,
    city: String,
     title: String,
     description: String,
      price: String,
      contact: String,
     image: String,
     category: String,
      landlord: String,
     landlord_id: String,
     hno: String,
     user_id:String,
     name:String,
     level:String,
 index:String,
     ocupieddate:String,
     note:String,


    createdAt: {
    type: Date,
    default: new Date(),
    },
 
})
var Cart = mongoose.model('Cart', postSchema);
export default Cart;
