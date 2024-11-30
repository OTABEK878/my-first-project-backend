const { ReasonLid } = require("../model/reason_lid.model");

// Get all Reason Lids
const getReasonLids = async (req, res) => {
    try {
        const reasons = await ReasonLid.find({});
        res.json({
            success: true,
            message: "Barcha reason lid ro'yxati.",
            innerData: reasons,
        });
    } catch (error) {
        console.error("Error fetching reason lids:", error);
        res.status(500).json({
            success: false,
            message: "Server xatosi: Reason lidlarni olishda xato yuz berdi.",
        });
    }
};

// Create Reason Lid
const createReasonLid = async (req, res) => {
    try {
        const { reason_lid } = req.body;

        const newReasonLid = new ReasonLid({ reason_lid });
        await newReasonLid.save();

        return res.status(201).json({
            success: true,
            message: "Reason lid qo'shildi!",
        });
    } catch (error) {
        console.error("xato:", error);
        return res.status(500).json({
            success: false,
            message: "Server xatosi: Reason lid qo'shishda xatolik yuz berdi!",
        });
    }
};

// Update Reason Lid
const updateReasonLid = async (req, res) => {
    try {
        const { id } = req.params;
        const { reason_lid } = req.body;

        const updatedReasonLid = await ReasonLid.findByIdAndUpdate(
            id,
            { reason_lid },
            { new: true }
        );

        if (!updatedReasonLid) {
            return res.status(404).json({
                success: false,
                message: "Reason lid topilmadi!",
            });
        }

        res.json({
            success: true,
            message: "Reason lid muvaffaqiyatli yangilandi!",
            reason_lid: updatedReasonLid,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server xatosi",
            error: error.message,
        });
    }
};

// Delete Reason Lid
const deleteReasonLid = async (req, res) => {
    try {
        const reasonId = req.params.id;

        const deletedReasonLid = await ReasonLid.findByIdAndDelete(reasonId);

        if (!deletedReasonLid) {
            return res.status(404).json({ message: "Reason lid topilmadi" });
        }

        res.json({
            message: "Reason lid muvaffaqiyatli o'chirildi",
            deletedReasonLid,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server xatosi" });
    }
};

// Get Reason Lid by ID
const getReasonLidById = async (req, res) => {
    try {
        const reasonId = req.params.id;

        const reason = await ReasonLid.findById(reasonId);

        if (!reason) {
            return res.status(404).json({ message: "Reason lid topilmadi" });
        }

        res.json({ message: "Reason lid topildi", reason_lid: reason });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server xatosi" });
    }
};

module.exports = {
    createReasonLid,
    getReasonLids,
    getReasonLidById,
    updateReasonLid,
    deleteReasonLid,
};
