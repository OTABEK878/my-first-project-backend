const { Schema, model } = require("mongoose");

const groupStuffSchema = new Schema({
    group_id: { type: Schema.Types.ObjectId, ref: "Group", required: true },
    stuff_id: { type: Schema.Types.ObjectId, ref: "stuff", required: true }
});

const GroupStuff7 = model("GroupStuff7", groupStuffSchema);

module.exports = { GroupStuff7 };