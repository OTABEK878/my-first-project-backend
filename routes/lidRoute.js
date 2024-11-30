const { Router } = require("express");
const {
    createLidStatus,
    getLidStatuses,
    getLidStatusById,
    updateLidStatus,
    deleteLidStatus,
} = require("../controller/lid_status.controller");

const lidStatuses = Router();

/**
 * @swagger
 * tags:
 *   name: Lid Statuses
 */

/**
 * @swagger
 * /lid_status/create:
 *   post:
 *     summary: Yangi status qo'shish
 *     tags: [Lid Statuses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 description: Status nomi
 *     responses:
 *       '201':
 *         description: Status muvaffaqiyatli qo'shildi
 *       '500':
 *         description: Ichki server xatosi
 */

/**
 * @swagger
 * /lid_status/list:
 *   get:
 *     summary: Barcha statuslarni olish
 *     tags: [Lid Statuses]
 *     responses:
 *       '200':
 *         description: Barcha statuslar muvaffaqiyatli olingan
 *       '500':
 *         description: Ichki server xatosi
 */

/**
 * @swagger
 * /lid_status/{id}:
 *   get:
 *     summary: Statusni ID orqali olish
 *     tags: [Lid Statuses]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Status ID si
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Status muvaffaqiyatli topildi
 *       '404':
 *         description: Status topilmadi
 *       '500':
 *         description: Ichki server xatosi
 */

/**
 * @swagger
 * /lid_status/update/{id}:
 *   put:
 *     summary: Statusni yangilash
 *     tags: [Lid Statuses]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Status ID si
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Status muvaffaqiyatli yangilandi
 *       '404':
 *         description: Status topilmadi
 *       '500':
 *         description: Ichki server xatosi
 */

/**
 * @swagger
 * /lid_status/delete/{id}:
 *   delete:
 *     summary: Statusni o'chirish
 *     tags: [Lid Statuses]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Status ID si
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Status muvaffaqiyatli o'chirildi
 *       '404':
 *         description: Status topilmadi
 *       '500':
 *         description: Ichki server xatosi
 */

lidStatuses.post("/create", createLidStatus);
lidStatuses.get("/list", getLidStatuses);
lidStatuses.get("/:id", getLidStatusById);
lidStatuses.put("/update/:id", updateLidStatus);
lidStatuses.delete("/delete/:id", deleteLidStatus);

module.exports = { lidStatuses };
