const { Router } = require("express");
const {
    createReasonLid,
    getReasonLids,
    getReasonLidById,
    updateReasonLid,
    deleteReasonLid,
} = require("../controller/reason_lid.controller");

const reasonLids = Router();

/**
 * @swagger
 * tags:
 *   name: Reason Lids
 */

/**
 * @swagger
 * /reason_lid/create:
 *   post:
 *     summary: Yangi reason lid qo'shish
 *     tags: [Reason Lids]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               reason_lid:
 *                 type: string
 *                 description: Reason lid nomi
 *     responses:
 *       '201':
 *         description: Reason lid muvaffaqiyatli qo'shildi
 *       '500':
 *         description: Ichki server xatosi
 */

/**
 * @swagger
 * /reason_lid/list:
 *   get:
 *     summary: Barcha reason lidlarni olish
 *     tags: [Reason Lids]
 *     responses:
 *       '200':
 *         description: Barcha reason lidlar muvaffaqiyatli olingan
 *       '500':
 *         description: Ichki server xatosi
 */

/**
 * @swagger
 * /reason_lid/{id}:
 *   get:
 *     summary: Reason lidni ID orqali olish
 *     tags: [Reason Lids]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Reason lid ID si
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Reason lid muvaffaqiyatli topildi
 *       '404':
 *         description: Reason lid topilmadi
 *       '500':
 *         description: Ichki server xatosi
 */

/**
 * @swagger
 * /reason_lid/update/{id}:
 *   put:
 *     summary: Reason lidni yangilash
 *     tags: [Reason Lids]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Reason lid ID si
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               reason_lid:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Reason lid muvaffaqiyatli yangilandi
 *       '404':
 *         description: Reason lid topilmadi
 *       '500':
 *         description: Ichki server xatosi
 */

/**
 * @swagger
 * /reason_lid/delete/{id}:
 *   delete:
 *     summary: Reason lidni o'chirish
 *     tags: [Reason Lids]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Reason lid ID si
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Reason lid muvaffaqiyatli o'chirildi
 *       '404':
 *         description: Reason lid topilmadi
 *       '500':
 *         description: Ichki server xatosi
 */

reasonLids.post("/create", createReasonLid);
reasonLids.get("/list", getReasonLids);
reasonLids.get("/:id", getReasonLidById);
reasonLids.put("/update/:id", updateReasonLid);
reasonLids.delete("/delete/:id", deleteReasonLid);

module.exports = { reasonLids };
