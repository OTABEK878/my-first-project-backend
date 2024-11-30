const { GroupStuff7 } = require("../model/groupstuff.model");
const mongoose = require("mongoose");
// Create groupStuff7
const createGroupStuff = async (req, res) => {
    try {
        const { group_id, stuff_id } = req.body;

        const newGroupStuff = new GroupStuff7({ group_id, stuff_id });
        await newGroupStuff.save();

        res.status(201).json({
            success: true,
            message: "Guruh va stuff bog'landi!",
            groupStuff: newGroupStuff,
        });
    } catch (error) {
        console.error("Xato:", error);
        res.status(500).json({ success: false, message: "Server xatosi" });
    }
};

// Get groupStuff7 by ID
const getGroupStuffById = async (req, res) => {
    try {
        const { id } = req.params;
        const groupStuff = await GroupStuff7.findById(id).populate("group_id stuff_id");

        if (!groupStuff) {
            return res.status(404).json({ message: "Bog'lanish topilmadi" });
        }

        res.json({ success: true, groupStuff });
    } catch (error) {
        console.error("Xato:", error);
        res.status(500).json({ message: "Server xatosi" });
    }
};

// Update groupStuff7
const updateGroupStuff = async (req, res) => {
    try {
        const { id } = req.params;
        const { group_id, stuff_id } = req.body;

        const updatedGroupStuff = await GroupStuff7.findByIdAndUpdate(
            id,
            { group_id, stuff_id },
            { new: true }
        );

        if (!updatedGroupStuff) {
            return res.status(404).json({
                success: false,
                message: "Bog'lanish topilmadi!",
            });
        }

        res.json({
            success: true,
            message: "Bog'lanish yangilandi!",
            groupStuff: updatedGroupStuff,
        });
    } catch (error) {
        console.error("Bog'lanishni yangilashda xato:", error);
        res.status(500).json({
            success: false,
            message: "Server xatosi: Bog'lanishni yangilashda xatolik yuz berdi.",
        });
    }
};

// Delete groupStuff7
const deleteGroupStuff = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedGroupStuff = await GroupStuff7.findByIdAndDelete(id);

        if (!deletedGroupStuff) {
            return res.status(404).json({
                success: false,
                message: "Bog'lanish topilmadi!",
            });
        }

        res.json({
            success: true,
            message: "Bog'lanish muvaffaqiyatli o'chirildi!",
            deletedGroupStuff,
        });
    } catch (error) {
        console.error("Bog'lanishni o'chirishda xato:", error);
        res.status(500).json({
            success: false,
            message: "Server xatosi: Bog'lanishni o'chirishda xatolik yuz berdi.",
        });
    }
};

module.exports = {
    createGroupStuff,
    getGroupStuffById,
    updateGroupStuff,
    deleteGroupStuff,
};