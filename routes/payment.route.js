const { Router } = require("express");
const {
    createPayment,
    getPaymentById,
    getAllPayments,
    updatePayment,
    deletePayment
} = require("../controller/payment.controller");

const paymentRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Payment
 */

/**
 * @swagger
 * /paymentRouter/payments:
 *   post:
 *     summary: Yangi to'lov qo'shish
 *     tags: [Payment]
 *     description: Yangi to'lov ma'lumotlarini qo'shadi
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               student_id:
 *                 type: string
 *               payment_last_date:
 *                 type: string
 *                 format: date
 *               payment_date:
 *                 type: string
 *                 format: date
 *               price:
 *                 type: number
 *               is_paid:
 *                 type: boolean
 *               total_attent:
 *                 type: number
 *     responses:
 *       '201':
 *         description: To'lov muvaffaqiyatli qo'shildi
 *       '500':
 *         description: Server xatosi
 */
paymentRouter.post("/payments", createPayment);

/**
 * @swagger
 * /paymentRouter/payments/{id}:
 *   get:
 *     summary: Talaba ID si orqali to'lovni olish
 *     tags: [Payment]
 *     description: Talaba ID si orqali to'lov ma'lumotlarini olish
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Talaba ID si
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: To'lov topildi
 *       '404':
 *         description: To'lov topilmadi
 *       '500':
 *         description: Server xatosi
 */
paymentRouter.get("/payments/:id", getPaymentById);

/**
 * @swagger
 * /paymentRouter/payments:
 *   get:
 *     summary: Barcha to'lovlarni olish
 *     tags: [Payment]
 *     description: Barcha to'lovlar ro'yxatini olish
 *     responses:
 *       '200':
 *         description: Barcha to'lovlar olingan
 *       '500':
 *         description: Server xatosi
 */
paymentRouter.get("/payments", getAllPayments);

/**
 * @swagger
 * /paymentRouter/payments/{id}:
 *   put:
 *     summary: To'lovni yangilash
 *     tags: [Payment]
 *     description: Talaba ID si orqali to'lovni yangilash
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Talaba ID si
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               payment_last_date:
 *                 type: string
 *                 format: date
 *               payment_date:
 *                 type: string
 *                 format: date
 *               price:
 *                 type: number
 *               is_paid:
 *                 type: boolean
 *               total_attent:
 *                 type: number
 *     responses:
 *       '200':
 *         description: To'lov muvaffaqiyatli yangilandi
 *       '404':
 *         description: To'lov topilmadi
 *       '500':
 *         description: Server xatosi
 */
paymentRouter.put("/payments/:id", updatePayment);

/**
 * @swagger
 * /paymentRouter/payments/{id}:
 *   delete:
 *     summary: Talaba ID si orqali to'lovni o'chirish
 *     tags: [Payment]
 *     description: Talaba ID si orqali to'lovni o'chirish
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Talaba ID si
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: To'lov muvaffaqiyatli o'chirildi
 *       '404':
 *         description: To'lov topilmadi
 *       '500':
 *         description: Server xatosi
 */
paymentRouter.delete("/payments/:id", deletePayment);

module.exports = { paymentRouter };
