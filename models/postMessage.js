
import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
title: String,
description: String,
price: String,
hno: String,
likes: [String],
digital_adress: String,
contact: String,
area: String,
city:String,
landlord:String,
landlord_id: String,
comments: [String],
image: String,
video: String,
category:String,
image:"",
image1:String,
image2:String,
image3:String,
image4:String,
createdAt: {
type: Date,
default: new Date(),
},
})
var PostMessage = mongoose.model('PostMessage', postSchema);
export default PostMessage;
