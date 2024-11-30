const { Payment } = require("../model/payment.model");

const createPayment = async (req, res) => {
    try {
        const { student_id, payment_last_date, payment_date, price, is_paid, total_attent } = req.body;

        const newPayment = new Payment({
            student_id,
            payment_last_date,
            payment_date,
            price,
            is_paid,
            total_attent,
        });

        await newPayment.save();

        res.status(201).json({
            success: true,
            message: "To'lov muvaffaqiyatli qo'shildi",
        });
    } catch (error) {
        console.error("To'lovni qo'shishda xato:", error);
        res.status(500).json({
            success: false,
            message: "Server xatosi: To'lov qo'shishda xato yuz berdi.",
        });
    }
};

const getPaymentById = async (req, res) => {
    try {
        const { id } = req.params;

        const payment = await Payment.findById(id).populate("student_id", "first_name last_name");

        if (!payment) {
            return res.status(404).json({
                success: false,
                message: "To'lov topilmadi!",
            });
        }

        res.json({
            success: true,
            message: "To'lov topildi",
            payment,
        });
    } catch (error) {
        console.error("To'lovni olishda xato:", error);
        res.status(500).json({
            success: false,
            message: "Server xatosi: To'lovni olishda xato yuz berdi.",
        });
    }
};

// Get all payments
const getAllPayments = async (req, res) => {
    try {
        const payments = await Payment.find().populate("student_id", "first_name last_name");
        res.json({
            success: true,
            message: "Barcha to'lovlar olingan",
            payments,
        });
    } catch (error) {
        console.error("Barcha to'lovlarni olishda xato:", error);
        res.status(500).json({
            success: false,
            message: "Server xatosi: Barcha to'lovlarni olishda xato yuz berdi.",
        });
    }
};

const updatePayment = async (req, res) => {
    try {
        const { id } = req.params;

        const { payment_last_date, payment_date, price, is_paid, total_attent } = req.body;

        const updatedPayment = await Payment.findByIdAndUpdate(
            id,
            { payment_last_date, payment_date, price, is_paid, total_attent },
            { new: true, runValidators: true }
        );

        if (!updatedPayment) {
            return res.status(404).json({
                success: false,
                message: "To'lov topilmadi!",
            });
        }

        res.json({
            success: true,
            message: "To'lov muvaffaqiyatli yangilandi!",
            payment: updatedPayment,
        });
    } catch (error) {
        console.error("To'lovni yangilashda xato:", error);
        res.status(500).json({
            success: false,
            message: "Server xatosi: To'lovni yangilashda xato yuz berdi.",
        });
    }
};

const deletePayment = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedPayment = await Payment.findByIdAndDelete(id);

        if (!deletedPayment) {
            return res.status(404).json({
                success: false,
                message: "To'lov topilmadi!",
            });
        }

        res.json({
            success: true,
            message: "To'lov muvaffaqiyatli o'chirildi",
        });
    } catch (error) {
        console.error("To'lovni o'chirishda xato:", error);
        res.status(500).json({
            success: false,
            message: "Server xatosi: To'lovni o'chirishda xato yuz berdi.",
        });
    }
};

module.exports = {
    createPayment,
    getPaymentById,
    getAllPayments,
    updatePayment,
    deletePayment,
};
