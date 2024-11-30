const { Router } = require("express");
const {
    createLid,
    getLids,
    getLidById,
    deleteLid
} = require("../controller/lid11.controller");

const lidRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Lid
 */

/**
 * @swagger
 * /lidRouter/CreateLid:
 *   post:
 *     summary: Yangi lid qo'shish
 *     tags: [Lid]
 *     description: Yangi lid ma'lumotlarini qo'shadi
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               phone_number:
 *                 type: string
 *               lid_stage_id:
 *                 type: string
 *               test_date:
 *                 type: string
 *               trial_lesson_date:
 *                 type: string
 *               trial_lesson_time:
 *                 type: string
 *               trial_lesson_group_id:
 *                 type: string
 *               lid_status_id:
 *                 type: string
 *               cancel_reason_id:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Lid muvaffaqiyatli qo'shildi
 *       '500':
 *         description: Ichki server xatosi
 */

/**
 * @swagger
 * /lidRouter/GetLids:
 *   get:
 *     summary: Barcha lidlarni olish
 *     tags: [Lid]
 *     description: Barcha lidlar ro'yxatini olish
 *     responses:
 *       '200':
 *         description: Barcha lidlar muvaffaqiyatli olingan
 *       '500':
 *         description: Ichki server xatosi
 */

/**
 * @swagger
 * /lidRouter/GetLidById/{id}:
 *   get:
 *     summary: Lid ma'lumotlarini ID orqali olish
 *     tags: [Lid]
 *     description: Berilgan ID ga ega lid ma'lumotlarini olish
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Lid ID si
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Lid muvaffaqiyatli topildi
 *       '404':
 *         description: Lid topilmadi
 *       '500':
 *         description: Ichki server xatosi
 */

/**
 * @swagger
 * /lidRouter/DeleteLid/{id}:
 *   delete:
 *     summary: Lidni o'chirish
 *     tags: [Lid]
 *     description: Berilgan ID ga ega lidni o'chirish
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Lid ID si
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Lid muvaffaqiyatli o'chirildi
 *       '404':
 *         description: Lid topilmadi
 *       '500':
 *         description: Ichki server xatosi
 */

lidRouter.post("/CreateLid", createLid);
lidRouter.get("/GetLids", getLids);
lidRouter.get("/GetLidById/:id", getLidById);
lidRouter.delete("/DeleteLid/:id", deleteLid);

module.exports = { lidRouter };
