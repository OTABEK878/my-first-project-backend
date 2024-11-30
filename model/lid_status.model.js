const { Schema, model } = require("mongoose");

const lidStatusModel = new Schema({
    status: { type: String, required: true, trim: true }
});

const LidStatus = model("lid_status", lidStatusModel);
module.exports = { LidStatus };
