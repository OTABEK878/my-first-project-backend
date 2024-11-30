const { Schema, model } = require("mongoose");

const StuffRoleModel = new Schema({
    stuffId: { type: Schema.Types.ObjectId, ref: "stuff", required: true },
    roleId: { type: Schema.Types.ObjectId, ref: "role", required: true }
});

const StuffRole = model("StuffRole", StuffRoleModel);
module.exports = { StuffRole };