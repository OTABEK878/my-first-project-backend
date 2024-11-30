const { Schema, model } = require("mongoose");

const groupSchema = new Schema({
    group_name: { type: String, required: true, trim: true },
    lesson_start_time: { type: String, trim: true },
    lesson_continuous: { type: String, trim: true },
    lesson_week_day: { type: String, trim: true },
    group_stage_id: { type: Schema.Types.ObjectId, ref: "Stage", required: true },
    room_number: { type: String, required: true },
    room_floor: { type: String, required: true },
    branch_id: { type: Schema.Types.ObjectId, ref: "Branch", required: true },
    lessons_quant: { type: Number, required: true },
    is_active: { type: Boolean, default: true }
});

const Group = model("Group", groupSchema);

module.exports = Group;

