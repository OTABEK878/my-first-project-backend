const { Stage } = require("../model/stage.model");

// Get Stages
const getStages = async (req, res) => {
    try {
        const stages = await Stage.find({});
        res.json({
            success: true,
            message: "Barcha bosqichlar ro'yxati.",
            innerData: stages,
        });
    } catch (error) {
        console.error("Bosqichlarni olishda xato:", error);
        res.status(500).json({
            success: false,
            message: "Server xatosi: Bosqichlarni olishda xato yuz berdi.",
        });
    }
};

// Create Stage
const createStage = async (req, res) => {
    try {
        const { name } = req.body;

        const newStage = new Stage({
            name,
        });

        await newStage.save();

        return res.status(201).json({
            success: true,
            message: "Bosqich qo'shildi!",
        });
    } catch (error) {
        console.error("Bosqich qo'shishda xato:", error);
        return res.status(500).json({
            success: false,
            message: "Server xatosi: Bosqich qo'shishda xato yuz berdi!",
        });
    }
};

// Update Stage
const updateStage = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;

        const updatedStage = await Stage.findByIdAndUpdate(
            id,
            { name },
            { new: true }
        );

        if (!updatedStage) {
            return res.status(404).json({
                success: false,
                message: "Bosqich topilmadi!",
            });
        }

        res.json({
            success: true,
            message: "Bosqich muvaffaqiyatli yangilandi!",
            stage: updatedStage,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server xatosi: Bosqich yangilanishida xato!",
            error: error.message,
        });
    }
};

// Delete Stage
const deleteStage = async (req, res) => {
    try {
        const stageId = req.params.id;

        // Find the stage by ID and delete it
        const deletedStage = await Stage.findByIdAndDelete(stageId);

        if (!deletedStage) {
            return res.status(404).json({ message: "Bosqich topilmadi!" });
        }

        res.json({ message: "Bosqich muvaffaqiyatli o'chirildi!", deletedStage });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server xatosi: Bosqich o'chirishda xato!" });
    }
};

// Get Stage by ID
const getStageById = async (req, res) => {
    try {
        const stageId = req.params.id;

        const stage = await Stage.findById(stageId);

        if (!stage) {
            return res.status(404).json({ message: "Bosqich topilmadi!" });
        }

        res.json({ message: "Bosqich topildi!", stage });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server xatosi: Bosqich topishda xato!" });
    }
};

module.exports = {
    createStage,
    getStages,
    updateStage,
    deleteStage,
    getStageById,
};
