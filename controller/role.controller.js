const { Role } = require("../model/roles.model");

// Get Roles
const getRoles = async (req, res) => {
    try {
        const roles = await Role.find({});
        res.json({
            success: true,
            message: "Barcha ro'yxat.",
            innerData: roles,
        });
    } catch (error) {
        console.error("Error fetching roles:", error);
        res.status(500).json({
            success: false,
            message: "Server xatosi: Ro'yxatlarni olishda xato yuz berdi.",
        });
    }
};

// CreateRole
const CreateRole = async (req, res) => {
    try {
        const { name } = req.body;

        const newRole = new Role({
            name,
        });

        await newRole.save();

        return res.status(201).json({
            success: true,
            message: "Role qoshildi!",
        });
    } catch (error) {
        console.error("xato:", error);
        return res.status(500).json({
            success: false,
            message: "Server xatosi: Role qoshishda xatolik yuz berdi!",
        });
    }
};

// Update Role
const updateRole = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;

        // Update Role in the database
        const updatedRole = await Role.findByIdAndUpdate(
            id,
            { name },
            { new: true }
        );

        if (!updatedRole) {
            return res.status(404).json({
                success: false,
                message: "Role not found!",
            });
        }

        res.json({
            success: true,
            message: "Role updated successfully!",
            role: updatedRole,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        });
    }
};

// Delete Role
const deleteRole = async (req, res) => {
    try {
        const roleId = req.params.id;

        // Find the role by ID and delete it
        const deletedRole = await Role.findByIdAndDelete(roleId);

        if (!deletedRole) {
            return res.status(404).json({ message: "Role not found" });
        }

        res.json({ message: "Role deleted successfully", deletedRole });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Get Role by ID
const getRoleById = async (req, res) => {
    try {
        const roleId = req.params.id;

        const role = await Role.findById(roleId);

        if (!role) {
            return res.status(404).json({ message: "Role not found" });
        }

        res.json({ message: "Role found", role });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = {
    CreateRole,
    getRoleById,
    getRoles,
    deleteRole,
    updateRole,
};
