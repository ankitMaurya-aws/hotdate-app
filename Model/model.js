const mongoose = require("mongoose");

const modelSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    DOB: { type: String, required: true },
    lookingFor: { type: String, required: true },
    marital_status: { type: String, required: true },
    body_type: { type: String, required: true },
    language: { type: String, required: true },
    images: [{ type: String, required: true }],
    videos: [{ type: String, required: true }]
});

const model = mongoose.model("model", modelSchema);

module.exports = model;
