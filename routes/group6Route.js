const { Router } = require("express");
const {
    createGroup,
    getGroups,
    getGroupById,
    deleteGroup,
} = require("../controller/group6.controller");

const group6 = Router();
/**
 * @swagger
 * tags:
 *   name: Group6
 */

/**
 * @swagger
 * /group6/CreateGroup:
 *   post:
 *     summary: Yangi group qo'shish
 *     tags: [Group6]
 *     description: Yangi group ma'lumotlarini qo'shadi
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               group_name:
 *                 type: string
 *               lesson_start_time:
 *                 type: string
 *               lesson_continuous:
 *                 type: string
 *               lesson_week_day:
 *                 type: string
 *               group_stage_id:
 *                 type: string
 *               room_number:
 *                 type: string
 *               room_floor:
 *                 type: number
 *               branch_id:
 *                 type: string
 *               lessons_quant:
 *                 type: number
 *               is_active:
 *                 type: boolean
 *     responses:
 *       '201':
 *         description: Guruh muvaffaqiyatli qo'shildi
 *       '500':
 *         description: Ichki server xatosi
 */

/**
 * @swagger
 * /group6/GetGroups:
 *   get:
 *     summary: Barcha guruhlarni olish
 *     tags: [Group6]
 *     description: Barcha guruhlar ro'yxatini olish, har bir guruhga tegishli filial ma'lumotlarini ham qo'shib
 *     responses:
 *       '200':
 *         description: Barcha guruhlar muvaffaqiyatli olingan
 *       '500':
 *         description: Ichki server xatosi
 */

/**
 * @swagger
 * /group6/GetGroupById/{id}:
 *   get:
 *     summary: Group ma'lumotlarini ID orqali olish
 *     tags: [Group6]
 *     description: Berilgan ID ga ega group ma'lumotlarini olish, har bir guruhga tegishli filial ma'lumotlarini ham qo'shib
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Group ID si
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Group muvaffaqiyatli topildi
 *       '404':
 *         description: Group topilmadi
 *       '500':
 *         description: Ichki server xatosi
 */

/**
 * @swagger
 * /group6/DeleteGroup/{id}:
 *   delete:
 *     summary: Groupni o'chirish
 *     tags: [Group6]
 *     description: Berilgan ID ga ega groupni o'chirish
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Group ID si
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Group muvaffaqiyatli o'chirildi
 *       '404':
 *         description: Group topilmadi
 *       '500':
 *         description: Ichki server xatosi
 */

group6.post("/CreateGroup", createGroup);
group6.get("/GetGroups", getGroups);
group6.get("/GetGroupById/:id", getGroupById);
group6.delete("/DeleteGroup/:id", deleteGroup);

module.exports = { group6 };