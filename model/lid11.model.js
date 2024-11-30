const { Schema, model } = require("mongoose");

const lidSchema = new Schema({
    first_name: { type: String, required: true, trim: true },
    last_name: { type: String, required: true, trim: true },
    phone_number: { type: String, required: true, trim: true },
    lid_stage_id: { type: Schema.Types.ObjectId, ref: "Stage", required: true },
    test_date: { type: Date },
    trial_lesson_date: { type: Date },
    trial_lesson_time: { type: String },
    trial_lesson_group_id: { type: Schema.Types.ObjectId, ref: "Group", required: true },
    lid_status_id: { type: Schema.Types.ObjectId, ref: "lid_status", required: true },
    cancel_reason_id: { type: Schema.Types.ObjectId, ref: "reason_lid", required: true },
    is_active: { type: Boolean, default: true }
});

const Lid = model("Lid", lidSchema);

module.exports = Lid;
