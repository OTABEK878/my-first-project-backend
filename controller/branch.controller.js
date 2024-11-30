const { Branch } = require("../model/branch.model");

const getBranches = async (req, res) => {
    try {
        const branches = await Branch.find({});
        res.json({
            success: true,
            message: "Barcha filiallar ro'yxati.",
            innerData: branches,
        });
    } catch (error) {
        console.error("Filialarni olishda xato:", error);
        res.status(500).json({
            success: false,
            message: "Server xatosi: Filialarni olishda xato yuz berdi.",
        });
    }
};

const createBranch = async (req, res) => {
    try {
        const { name, address, call_number } = req.body;

        const newBranch = new Branch({
            name,
            address,
            call_number,
        });

        await newBranch.save();

        return res.status(201).json({
            success: true,
            message: "Filial qoshildi!",
        });
    } catch (error) {
        console.error("Xato:", error);
        return res.status(500).json({
            success: false,
            message: "Server xatosi: Filial qoshishda xatolik yuz berdi!",
        });
    }
};

const updateBranch = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, address, call_number } = req.body;

        const updatedBranch = await Branch.findByIdAndUpdate(
            id,
            { name, address, call_number },
            { new: true }
        );

        if (!updatedBranch) {
            return res.status(404).json({
                success: false,
                message: "Filial topilmadi!",
            });
        }

        res.json({
            success: true,
            message: "Filial muvaffaqiyatli yangilandi!",
            branch: updatedBranch,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Ichki server xatosi",
            error: error.message,
        });
    }
};

const deleteBranch = async (req, res) => {
    try {
        const branchId = req.params.id;

        const deletedBranch = await Branch.findByIdAndDelete(branchId);

        if (!deletedBranch) {
            return res.status(404).json({ message: "Filial topilmadi" });
        }

        res.json({ message: "Filial muvaffaqiyatli o'chirildi", deletedBranch });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Ichki server xatosi" });
    }
};

const getBranchById = async (req, res) => {
    try {
        const branchId = req.params.id;

        const branch = await Branch.findById(branchId);

        if (!branch) {
            return res.status(404).json({ message: "Filial topilmadi" });
        }

        res.json({ message: "Filial topildi", branch });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Ichki server xatosi" });
    }
};

module.exports = {
    createBranch,
    getBranchById,
    getBranches,
    deleteBranch,
    updateBranch,
};
