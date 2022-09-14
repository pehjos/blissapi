
import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  
    message:String,
    landlord_id:String,
     landlord:String,
     user_id:String,
 
    createdAt: {
    type: Date,
    default: new Date(),
    },
})
var Chart = mongoose.model('Chart', postSchema);
export default Chart;
