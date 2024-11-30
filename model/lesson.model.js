const { Schema, model } = require("mongoose");

const lessonSchema = new Schema({
    lesson_theme: { type: String, trim: true },
    lesson_number: { type: String, trim: true },
    group_name: { type: String, trim: true },
    lesson_date: { type: String, trim: true }
});

const Lesson = model("Lesson", lessonSchema); 

module.exports = { Lesson };