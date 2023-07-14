const mongoose = require("mongoose");

const ClubSchema = new mongoose.Schema({
  ownerId:{ type: mongoose.Schema.Types.ObjectId,ref: "User"},
    clubname: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  description: {
    type: String,
  },
  image: [
    {
      type: String,
    },
  ],
  video: [
    {
      type: String,
    },
  ],
  clubtype: {
    type: String,
    enum: ["privateplace", "publicplace", "virtualdate"],
  },
  customer :[{ type: mongoose.Schema.Types.ObjectId,ref: "User"}]
});

const Club = mongoose.model("Club", ClubSchema);

module.exports = Club;
