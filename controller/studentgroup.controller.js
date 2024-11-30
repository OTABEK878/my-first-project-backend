const { StudentGroup } = require("../model/studentgroup.model");
const { Group } = require("../model/group6.model");

// Create StudentGroup
const createStudentGroupController = async (req, res) => {
    try {
        const { student_id, group_id } = req.body;
        const newStudentGroup = new StudentGroup({ student_id, group_id });

        await newStudentGroup.save();

        res.status(201).json({
            success: true,
            message: "StudentGroup qo'shildi!",
        });
    } catch (error) {
        console.error("Xato:", error);
        res.status(500).json({
            success: false,
            message: "Server xatosi: " + error.message
        });
    }
};

// Get all StudentGroups
const getStudentGroups = async (req, res) => {
    try {
        const studentGroups = await StudentGroup.find().populate("student_id").populate("group_id");

        res.json({ success: true, studentGroups });
    } catch (error) {
        console.error("Xato:", error);
        res.status(500).json({
            success: false,
            message: "Server xatosi: " + error.message
        });
    }
};

// Get StudentGroup by ID
const getStudentGroupById = async (req, res) => {
    try {
        const { id } = req.params;
        const studentGroup = await StudentGroup.findById(id).populate("student_id").populate("group_id");

        if (!studentGroup) {
            return res.status(404).json({ success: false, message: "StudentGroup topilmadi" });
        }

        res.json({ success: true, studentGroup });
    } catch (error) {
        console.error("Xato:", error);
        res.status(500).json({
            success: false,
            message: "Server xatosi: " + error.message
        });
    }
};

// Update StudentGroup
const updateStudentGroup = async (req, res) => {
    try {
        const { id } = req.params;
        const { student_id, group_id } = req.body;

        const updatedStudentGroup = await StudentGroup.findByIdAndUpdate(
            id,
            { student_id, group_id },
            { new: true }
        );

        if (!updatedStudentGroup) {
            return res.status(404).json({ success: false, message: "StudentGroup topilmadi!" });
        }

        res.json({
            success: true,
            message: "StudentGroup yangilandi!",
            studentGroup: updatedStudentGroup,
        });
    } catch (error) {
        console.error("StudentGroup yangilashda xato:", error);
        res.status(500).json({
            success: false,
            message: "Server xatosi: " + error.message
        });
    }
};

// Delete StudentGroup
const deleteStudentGroup = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedStudentGroup = await StudentGroup.findByIdAndDelete(id);

        if (!deletedStudentGroup) {
            return res.status(404).json({ success: false, message: "StudentGroup topilmadi!" });
        }

        res.json({
            success: true,
            message: "StudentGroup muvaffaqiyatli o'chirildi!",
            deletedStudentGroup,
        });
    } catch (error) {
        console.error("StudentGroup o'chirishda xato:", error);
        res.status(500).json({
            success: false,
            message: "Server xatosi: " + error.message
        });
    }
};

module.exports = {
    createStudentGroupController,
    getStudentGroups,
    getStudentGroupById,
    updateStudentGroup,
    deleteStudentGroup,
};
