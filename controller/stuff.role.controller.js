const { StuffRole } = require("../model/stuff.role.model");

// Create StuffRole
const createStuffRoleController = async (req, res) => {
    try {
        const { stuffId, roleId } = req.body;
        const newStuffRole = new StuffRole({ stuffId, roleId });

        await newStuffRole.save();

        res.status(201).json({
            success: true,
            message: "StuffRole qo'shildi!",
            stuffRole: newStuffRole,
        });
    } catch (error) {
        console.error("Xato:", error);
        res.status(500).json({ success: false, message: "Server xatosi" });
    }
};

// Get StuffRole by ID
const getStuffRoleById = async (req, res) => {
    try {
        const { id } = req.params;
        const stuffRole = await StuffRole.findById(id).populate("stuffId").populate("roleId");

        if (!stuffRole) {
            return res.status(404).json({ message: "StuffRole topilmadi" });
        }

        res.json({ success: true, stuffRole });
    } catch (error) {
        console.error("Xato:", error);
        res.status(500).json({ message: "Server xatosi" });
    }
};

// Update StuffRole
const updateStuffRole = async (req, res) => {
    try {
        const { id } = req.params;
        const { stuffId, roleId } = req.body;

        const updatedStuffRole = await StuffRole.findByIdAndUpdate(
            id,
            { stuffId, roleId },
            { new: true }
        );

        if (!updatedStuffRole) {
            return res.status(404).json({ success: false, message: "StuffRole topilmadi!" });
        }

        res.json({
            success: true,
            message: "StuffRole yangilandi!",
            stuffRole: updatedStuffRole,
        });
    } catch (error) {
        console.error("StuffRole yangilashda xato:", error);
        res.status(500).json({
            success: false,
            message: "Server xatosi: StuffRole yangilashda xatolik yuz berdi.",
        });
    }
};

// Delete StuffRole
const deleteStuffRole = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedStuffRole = await StuffRole.findByIdAndDelete(id);

        if (!deletedStuffRole) {
            return res.status(404).json({ success: false, message: "StuffRole topilmadi!" });
        }

        res.json({
            success: true,
            message: "StuffRole muvaffaqiyatli o'chirildi!",
            deletedStuffRole,
        });
    } catch (error) {
        console.error("StuffRole o'chirishda xato:", error);
        res.status(500).json({
            success: false,
            message: "Server xatosi: StuffRole o'chirishda xatolik yuz berdi.",
        });
    }
};

module.exports = {
    createStuffRoleController,
    getStuffRoleById,
    updateStuffRole,
    deleteStuffRole,
};
