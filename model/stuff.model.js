const { Schema, model } = require("mongoose");

const stuffModel = new Schema({
    first_name: { type: String, required: true, trim: true },
    last_name: { type: String, required: true, trim: true },
    phone_number: { type: String, required: true, trim: true },
    login: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true, trim: true },
    is_active: { type: Boolean, default: true }
});

const Stuff = model("stuff", stuffModel);
module.exports = { Stuff };