const { StudentLesson } = require("../model/studentLesson.model");

const createStudentLesson = async (req, res) => {
    try {
        const { student_id, lesson_id, is_there, reason, be_paid } = req.body;

        const newStudentLesson = new StudentLesson({
            student_id,
            lesson_id,
            is_there,
            reason,
            be_paid,
        });

        await newStudentLesson.save();

        res.status(201).json({
            success: true,
            message: "StudentLesson muvaffaqiyatli qo'shildi!",
        });
    } catch (error) {
        console.error("Xato:", error);
        res.status(500).json({
            success: false,
            message: "Server xatosi: StudentLesson qo'shishda xatolik yuz berdi.",
        });
    }
};


const getStudentLessons = async (req, res) => {
    try {
        const studentLessons = await StudentLesson.find({})
            .populate("student_id", "first_name last_name lid_id phone_number birthday gender")
            .populate("lesson_id", "lesson_theme lesson_number group_id lesson_date")
        
        const formattedLessons = studentLessons.map(lesson => ({
            id: lesson._id,
            student_id: lesson.student_id,
            lesson_id: lesson.lesson_id,
            is_there: lesson.is_there,
            reason: lesson.reason,
            be_paid: lesson.be_paid,
        }));
        
        res.json({
            success: true,
            message: "Barcha StudentLesson ro'yxati.",
            data: formattedLessons,
        });
    } catch (error) {
        console.error("Xato:", error);
        res.status(500).json({
            success: false,
            message: "Server xatosi: StudentLesson'larni olishda xato yuz berdi.",
        });
    }
};


const getStudentLessonById = async (req, res) => {
    try {
        const studentLessonId = req.params.id;
        const studentLesson = await StudentLesson.findById(studentLessonId)
        .populate("student_id", "first_name last_name lid_id phone_number birthday gender")
        .populate("lesson_id", "lesson_theme lesson_number group_id lesson_date")

        if (!studentLesson) {
            return res.status(404).json({ success: false, message: "StudentLesson topilmadi" });
        }

        res.json({ success: true, message: "StudentLesson topildi", studentLesson });
    } catch (error) {
        console.error("Xato:", error);
        res.status(500).json({ success: false, message: "Server xatosi: StudentLesson'ni olishda xato yuz berdi." });
    }
};


const updateStudentLesson = async (req, res) => {
    try {
        const { id } = req.params;
        const { student_id, lesson_id, is_there, reason, be_paid } = req.body;

        const updatedStudentLesson = await StudentLesson.findByIdAndUpdate(
            id,
            { student_id, lesson_id, is_there, reason, be_paid },
            { new: true }
        );

        if (!updatedStudentLesson) {
            return res.status(404).json({
                success: false,
                message: "StudentLesson topilmadi!",
            });
        }

        res.json({
            success: true,
            message: "StudentLesson muvaffaqiyatli yangilandi!",
            studentLesson: updatedStudentLesson,
        });
    } catch (error) {
        console.error("Xato:", error);
        res.status(500).json({
            success: false,
            message: "Server xatosi: StudentLesson'ni yangilashda xato yuz berdi.",
        });
    }
};

const deleteStudentLesson = async (req, res) => {
    try {
        const studentLessonId = req.params.id;
        const deletedStudentLesson = await StudentLesson.findByIdAndDelete(studentLessonId);

        if (!deletedStudentLesson) {
            return res.status(404).json({ success: false, message: "StudentLesson topilmadi" });
        }

        res.json({ success: true, message: "StudentLesson muvaffaqiyatli o'chirildi" });
    } catch (error) {
        console.error("Xato:", error);
        res.status(500).json({ success: false, message: "Server xatosi: StudentLesson'ni o'chirishda xato yuz berdi." });
    }
};

module.exports = {
    createStudentLesson,
    getStudentLessons,
    getStudentLessonById,
    updateStudentLesson,
    deleteStudentLesson,
};
