const mongoose = require("mongoose");
const Group = require("../model/group6.model");
const Branch = require("../model/branch.model");
const Stage = require("../model/stage.model");

const getGroups = async (req, res) => {
    try {
        const groups = await Group.find({})
            .populate({
                path: "branch_id",
                select: "name address call_number",
                model: "Branch"
            })
            .populate({
                path: "group_stage_id",
                select: "name",
                model: "Stage"
            });

        res.json({
            success: true,
            message: "Barcha guruhlar muvaffaqiyatli olingan.",
            innerData: groups,
        });
    } catch (error) {
        console.error("Guruhlarni olishda xato:", error);
        res.status(500).json({
            success: false,
            message: "Server xatosi: Guruhlarni olishda xato yuz berdi.",
            error: error.message
        });
    }
};

const createGroup = async (req, res) => {
    try {
        const {
            group_name,
            lesson_start_time,
            lesson_continuous,
            lesson_week_day,
            group_stage_id,
            room_number,
            room_floor,
            branch_id,
            lessons_quant,
            is_active = true
        } = req.body;

        const newGroup = new Group({
            group_name,
            lesson_start_time,
            lesson_continuous,
            lesson_week_day,
            group_stage_id,
            room_number,
            room_floor,
            branch_id,
            lessons_quant,
            is_active
        });

        await newGroup.save();

        return res.status(201).json({
            success: true,
            message: "Guruh muvaffaqiyatli qo'shildi!"
        });
    } catch (error) {
        console.error("Guruh qo'sishda xato:", error);
        return res.status(500).json({
            success: false,
            message: "Server xatosi: Guruh qo'shishda xatolik yuz berdi!",
            error: error.message
        });
    }
};



const deleteGroup = async (req, res) => {
    try {
        const groupId = req.params.id;

        const deletedGroup = await Group.findByIdAndDelete(groupId);

        if (!deletedGroup) {
            return res.status(404).json({
                success: false,
                message: "Guruh topilmadi!"
            });
        }

        res.json({
            success: true,
            message: "Guruh muvaffaqiyatli o'chirildi",
            deletedGroup
        });
    } catch (error) {
        console.error("Guruhni o'chirishda xato:", error);
        res.status(500).json({
            success: false,
            message: "Server xatosi: " + error.message
        });
    }
};

const getGroupById = async (req, res) => {
    try {
        const groupId = req.params.id;

        const group = await Group.findById(groupId)
            .populate({
                path: "branch_id", 
                select: "name address call_number" 
            })
            .populate({
                path: "group_stage_id", 
                select: "name"
            });

        if (!group) {
            return res.status(404).json({
                success: false,
                message: "Guruh topilmadi!"
            });
        }

        res.json({
            success: true,
            message: "Guruh topildi",
            group
        });
    } catch (error) {
        console.error("Guruhni olishda xato:", error);
        res.status(500).json({
            success: false,
            message: "Server xatosi: " + error.message
        });
    }
};

module.exports = {
    createGroup,
    getGroups,
    getGroupById,
    deleteGroup,
};
