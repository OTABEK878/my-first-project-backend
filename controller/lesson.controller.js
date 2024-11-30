const { Lesson } = require("../model/lesson.model");

const getLessons = async (req, res) => {
    try {
        const lessons = await Lesson.find({});
        res.json({
            success: true,
            message: "Barcha darslar ro'yxati.",
            innerData: lessons,
        });
    } catch (error) {
        console.error("Darslarni olishda xato:", error);
        res.status(500).json({
            success: false,
            message: "Server xatosi: Darslarni olishda xato yuz berdi.",
        });
    }
};

const createLessons = async (req, res) => {
    try {
        const { lesson_theme, lesson_number, group_name, lesson_date } = req.body;

        const newLesson = new Lesson({
            lesson_theme,
            lesson_number,
            group_name,
            lesson_date,
        });

        await newLesson.save();

        return res.status(201).json({
            success: true,
            message: "Dars qo'shildi!",
        });
    } catch (error) {
        console.error("Xato:", error);
        return res.status(500).json({
            success: false,
            message: "Server xatosi: Dars qo'shishda xatolik yuz berdi!",
        });
    }
};

const updateLessons = async (req, res) => {
    try {
        const { id } = req.params;
        const { lesson_theme, lesson_number, group_name, lesson_date } = req.body;

        const updatedLesson = await Lesson.findByIdAndUpdate(
            id,
            { lesson_theme, lesson_number, group_name, lesson_date },
            { new: true }
        );

        if (!updatedLesson) {
            return res.status(404).json({
                success: false,
                message: "Dars topilmadi!",
            });
        }

        res.json({
            success: true,
            message: "Dars muvaffaqiyatli yangilandi!",
            lesson: updatedLesson,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Ichki server xatosi",
            error: error.message,
        });
    }
};

const deleteLessons = async (req, res) => {
    try {
        const lessonId = req.params.id;

        const deletedLesson = await Lesson.findByIdAndDelete(lessonId);

        if (!deletedLesson) {
            return res.status(404).json({ message: "Dars topilmadi" });
        }

        res.json({ message: "Dars muvaffaqiyatli o'chirildi", deletedLesson });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Ichki server xatosi" });
    }
};

const getLessonsById = async (req, res) => {
    try {
        const lessonId = req.params.id;

        const lesson = await Lesson.findById(lessonId);

        if (!lesson) {
            return res.status(404).json({ message: "Dars topilmadi" });
        }

        res.json({ message: "Dars topildi", lesson });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Ichki server xatosi" });
    }
};

module.exports = {
    createLessons,
    getLessonsById,
    getLessons,
    deleteLessons,
    updateLessons,
};
