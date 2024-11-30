const { Student } = require("../model/student.model");
const Lid = require("../model/lid11.model");

// Talaba yaratish
const createStudent = async (req, res) => {
    try {
        const { lid_id, first_name, last_name, phone_number, birthday, gender } = req.body;

        const newStudent = new Student({
            lid_id,
            first_name,
            last_name,
            phone_number,
            birthday,
            gender,
        });

        await newStudent.save();

        res.status(201).json({
            success: true,
            message: "Talaba qo'shildi!"
        });
    } catch (error) {
        console.error("Xato:", error);
        res.status(500).json({
            success: false,
            message: "Server xatosi: Talaba qo'shishda xatolik yuz berdi."
        });
    }
};



// Barcha talabalarni olish
const getStudents = async (req, res) => {
    try {
        const students = await Student.find({})
            .populate("lid_id", "first_name last_name phone_number");

        res.json({
            success: true,
            message: "Barcha talabalar ro'yxati.",
            data: students,
        });
    } catch (error) {
        console.error("Talabalarni olishda xato:", error);
        res.status(500).json({
            success: false,
            message: "Server xatosi: Talabalarni olishda xato yuz berdi.",
        });
    }
};

// Talaba ID orqali olish
const getStudentById = async (req, res) => {
    try {
        const studentId = req.params.id;
        const student = await Student.findById(studentId)
            .populate("lid_id", "first_name last_name phone_number");

        if (!student) {
            return res.status(404).json({ success: false, message: "Talaba topilmadi" });
        }

        res.json({ success: true, message: "Talaba topildi", student });
    } catch (error) {
        console.error("Xato:", error);
        res.status(500).json({ success: false, message: "Server xatosi: Talabani olishda xato yuz berdi." });
    }
};

// Talaba yangilash
const updateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const { lid_id, first_name, last_name, phone_number, birthday, gender } = req.body;

        const updatedStudent = await Student.findByIdAndUpdate(
            id,
            { lid_id, first_name, last_name, phone_number, birthday, gender },
            { new: true }
        );

        if (!updatedStudent) {
            return res.status(404).json({
                success: false,
                message: "Talaba topilmadi!",
            });
        }

        res.json({
            success: true,
            message: "Talaba muvaffaqiyatli yangilandi!",
            student: updatedStudent,
        });
    } catch (error) {
        console.error("Xato:", error);
        res.status(500).json({
            success: false,
            message: "Server xatosi: Talabani yangilashda xato yuz berdi.",
        });
    }
};

// Talaba o'chirish
const deleteStudent = async (req, res) => {
    try {
        const studentId = req.params.id;
        const deletedStudent = await Student.findByIdAndDelete(studentId);

        if (!deletedStudent) {
            return res.status(404).json({ success: false, message: "Talaba topilmadi" });
        }

        res.json({ success: true, message: "Talaba muvaffaqiyatli o'chirildi" });
    } catch (error) {
        console.error("Xato:", error);
        res.status(500).json({ success: false, message: "Server xatosi: Talabani o'chirishda xato yuz berdi." });
    }
};

module.exports = {
    createStudent,
    getStudents,
    getStudentById,
    updateStudent,
    deleteStudent,
};
