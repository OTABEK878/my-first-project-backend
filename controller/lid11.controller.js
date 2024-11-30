const Lid = require("../model/lid11.model");
const Group = require("../model/group6.model");
const Stage = require("../model/stage.model");
const LidStatus = require("../model/lid_status.model");
const Reason = require("../model/reason_lid.model");

const getLids = async (req, res) => {
    try {
        const lids = await Lid.find({})
            .populate("lid_stage_id", "name")
            .populate("trial_lesson_group_id", "group_name lesson_start_time lesson_continuous lesson_week_day group_stage_id room_number room_floor branch_id lessons_quant is_active")
            .populate("lid_status_id", "status")
            .populate("cancel_reason_id", "reason_lid");

        res.json({
            success: true,
            message: "Barcha lidlar muvaffaqiyatli olingan.",
            innerData: lids,
        });
    } catch (error) {
        console.error("Lidlarni olishda xato:", error);
        res.status(500).json({
            success: false,
            message: "Server xatosi: Lidlarni olishda xato yuz berdi.",
            error: error.message
        });
    }
};

const createLid = async (req, res) => {
    try {
        const {
            first_name,
            last_name,
            phone_number,
            lid_stage_id,
            test_date,
            trial_lesson_date,
            trial_lesson_time,
            trial_lesson_group_id,
            lid_status_id,
            cancel_reason_id
        } = req.body;

        const newLid = new Lid({
            first_name,
            last_name,
            phone_number,
            lid_stage_id,
            test_date,
            trial_lesson_date,
            trial_lesson_time,
            trial_lesson_group_id,
            lid_status_id,
            cancel_reason_id
        });

        await newLid.save();

        return res.status(201).json({
            success: true,
            message: "Lid muvaffaqiyatli qo'shildi!"
        });
    } catch (error) {
        console.error("Lid qo'sishda xato:", error);
        return res.status(500).json({
            success: false,
            message: "Server xatosi: Lid qo'shishda xatolik yuz berdi!",
            error: error.message
        });
    }
};

const getLidById = async (req, res) => {
    try {
        const lidId = req.params.id;

        const lid = await Lid.findById(lidId)
        .populate("lid_stage_id", "name")
        .populate("trial_lesson_group_id", "group_name lesson_start_time lesson_continuous lesson_week_day group_stage_id room_number room_floor branch_id lessons_quant is_active")
        .populate("lid_status_id", "status")
        .populate("cancel_reason_id", "reason_lid");

        if (!lid) {
            return res.status(404).json({
                success: false,
                message: "Lid topilmadi!"
            });
        }

        res.json({
            success: true,
            message: "Lid topildi",
            lid
        });
    } catch (error) {
        console.error("Lidni olishda xato:", error);
        res.status(500).json({
            success: false,
            message: "Server xatosi: " + error.message
        });
    }
};

const deleteLid = async (req, res) => {
    try {
        const lidId = req.params.id;

        const deletedLid = await Lid.findByIdAndDelete(lidId);

        if (!deletedLid) {
            return res.status(404).json({
                success: false,
                message: "Lid topilmadi!"
            });
        }

        res.json({
            success: true,
            message: "Lid muvaffaqiyatli o'chirildi",
            deletedLid
        });
    } catch (error) {
        console.error("Lidni o'chirishda xato:", error);
        res.status(500).json({
            success: false,
            message: "Server xatosi: " + error.message
        });
    }
};

module.exports = {
    createLid,
    getLids,
    getLidById,
    deleteLid,
};
