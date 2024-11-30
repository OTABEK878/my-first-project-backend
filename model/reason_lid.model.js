const { Schema, model } = require("mongoose");

const reasonLidSchema = new Schema({
    reason_lid: { type: String, required: true, trim: true }
});

const ReasonLid = model("reason_lid", reasonLidSchema);
module.exports = { ReasonLid };
