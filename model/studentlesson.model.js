const { Schema, model } = require("mongoose");

const studentLessonSchema = new Schema({
    student_id: { type: Schema.Types.ObjectId, ref: "Student", required: true },
    lesson_id: { type: Schema.Types.ObjectId, ref: "Lesson", required: true },
    is_there: { type: Boolean, required: true },
    reason: { type: String, trim: true },
    be_paid: { type: Boolean, required: true },
});

const StudentLesson = model("StudentLesson", studentLessonSchema);

module.exports = { StudentLesson };
