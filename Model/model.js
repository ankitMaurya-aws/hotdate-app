const mongoose = require("mongoose");

const modelSchema = new mongoose.Schema({
    mainImage:{ type: String},
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    description : { type: String},
    email:{type:String},
    password:{type:String},
    DOB: { type: String, required: true },
    location: { type: String },
    lookingFor: { type: String, required: true },
    marital_status: { type: String, required: true },
    body_type: { type: String, required: true },
    language: { type: String, required: true },
    booking_by :{type: mongoose.Schema.Types.ObjectId,ref: "User"},
    booking_price :{type:String},
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
      paymentUser:{ type: mongoose.Schema.Types.ObjectId, ref: "User"},
      wallet :{type :Number,default:0},
    images: [{ type: String, required: true }],
    videos: [{ type: String, required: true }],
    isLive:{type:Boolean,default:false},
    isverify:{type:Boolean,default:false},
    otp:{type: String},
    token:{type: String}
    
},{
  timestamps:true
});

const model = mongoose.model("model", modelSchema);

module.exports = model;





