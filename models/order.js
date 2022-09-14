
import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
     title:String,
     price:String,
     area:String,
     image:String,
     landlord_id:String,
     landlord:String,
     user_id:String,
     category:String,
    createdAt: {
    type: Date,
    default: new Date(),
    },
})
var Order = mongoose.model('Order', postSchema);
export default Order;
