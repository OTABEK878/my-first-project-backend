const { LidStatus } = require("../model/lid_status.model");

// Get Lid Statuses
const getLidStatuses = async (req, res) => {
    try {
        const statuses = await LidStatus.find({});
        res.json({
            success: true,
            message: "Barcha statuslar ro'yxati.",
            innerData: statuses,
        });
    } catch (error) {
        console.error("Error fetching lid statuses:", error);
        res.status(500).json({
            success: false,
            message: "Server xatosi: Statuslarni olishda xato yuz berdi.",
        });
    }
};

const createLidStatus = async (req, res) => {
    try {
        const { status } = req.body;

        if (!status || status.trim() === "") {
            return res.status(400).json({
                success: false,
                message: "Status nomi kerak.",
            });
        }

        const newStatus = new LidStatus({ status });
        await newStatus.save();

        return res.status(201).json({
            success: true,
            message: "Status muvaffaqiyatli qo'shildi!",
        });
    } catch (error) {
        console.error("Xato:", error);
        return res.status(500).json({
            success: false,
            message: "Server xatosi: Status qo'shishda xatolik yuz berdi!",
        });
    }
};


const updateLidStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        if (!status || status.trim() === "") {
            return res.status(400).json({
                success: false,
                message: "Yangi status nomi kerak.",
            });
        }

        const updatedStatus = await LidStatus.findByIdAndUpdate(
            id,
            { status },
            { new: true }
        );

        if (!updatedStatus) {
            return res.status(404).json({
                success: false,
                message: "Status topilmadi!",
            });
        }

        res.json({
            success: true,
            message: "Status muvaffaqiyatli yangilandi!",
            lid_status: updatedStatus,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Ichki server xatosi",
            error: error.message,
        });
    }
};


// Delete Lid Status
const deleteLidStatus = async (req, res) => {
    try {
        const statusId = req.params.id;

        const deletedStatus = await LidStatus.findByIdAndDelete(statusId);

        if (!deletedStatus) {
            return res.status(404).json({ message: "Status topilmadi" });
        }

        res.json({
            success: true,
            message: "Status muvaffaqiyatli o'chirildi",
            deletedStatus,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Ichki server xatosi" });
    }
};


// Get Lid Status by ID
const getLidStatusById = async (req, res) => {
    try {
        const statusId = req.params.id;

        const status = await LidStatus.findById(statusId);

        if (!status) {
            return res.status(404).json({ message: "Status topilmadi" });
        }

        res.json({ message: "Status topildi", lid_status: status });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = {
    createLidStatus,
    getLidStatuses,
    getLidStatusById,
    updateLidStatus,
    deleteLidStatus,
};
