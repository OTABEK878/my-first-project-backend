const { Stuff } = require("../model/stuff.model");

// Get Stuff
const getStuff = async (req, res) => {
    try {
        const stuff = await Stuff.find({});
        res.json({
            success: true,
            message: "Barcha stuff.",
            innerData: stuff,
        });
    } catch (error) {
        console.error("Error fetching stuff:", error);
        res.status(500).json({
            success: false,
            message: "Server xatosi: Stuffni olishda xato yuz berdi.",
        });
    }
};

// Create Stuff
const createStuff = async (req, res) => {
    try {
        const { first_name, last_name, phone_number, login, password, is_active } = req.body;

        const newStuff = new Stuff({
            first_name,
            last_name,
            phone_number,
            login,
            password,
            is_active,
        });

        await newStuff.save();

        return res.status(201).json({
            success: true,
            message: "Stuff qoshildi!",
        });
    } catch (error) {
        console.error("xato:", error);
        return res.status(500).json({
            success: false,
            message: "Server xatosi: Stuff qoshishda xatolik yuz berdi!",
        });
    }
};

// Update Stuff
const updateStuff = async (req, res) => {
    try {
        const { id } = req.params;
        const { first_name, last_name, phone_number, login, password, is_active } = req.body;

        const updatedStuff = await Stuff.findByIdAndUpdate(
            id,
            { first_name, last_name, phone_number, login, password, is_active },
            { new: true }
        );

        if (!updatedStuff) {
            return res.status(404).json({
                success: false,
                message: "Stuff topilmadi!",
            });
        }

        res.json({
            success: true,
            message: "Stuff yangilandi!",
            stuff: updatedStuff,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Ichki server xatosi",
            error: error.message,
        });
    }
};

// Delete Stuff
const deleteStuff = async (req, res) => {
    try {
        const stuffId = req.params.id;

        const deletedStuff = await Stuff.findByIdAndDelete(stuffId);

        if (!deletedStuff) {
            return res.status(404).json({ message: "Stuff topilmadi" });
        }

        res.json({ message: "Stuff muvaffaqiyatli o'chirildi", deletedStuff });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Ichki server xatosi" });
    }
};

// Get Stuff by ID
const getStuffById = async (req, res) => {
    try {
        const stuffId = req.params.id;

        const stuff = await Stuff.findById(stuffId);

        if (!stuff) {
            return res.status(404).json({ message: "Stuff topilmadi" });
        }

        res.json({ message: "Stuff topildi", stuff });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Ichki server xatosi" });
    }
};

module.exports = {
    createStuff,
    getStuffById,
    getStuff,
    deleteStuff,
    updateStuff,
};
