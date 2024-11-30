const { Router } = require("express");
const {
    createLessons,
    getLessons,
    getLessonsById,
    updateLessons,
    deleteLessons,
} = require("../controller/lesson.controller");

const lesson = Router();

/**
 * @swagger
 * tags:
 *   name: Lesson
 */

/**
 * @swagger
 * /lesson:
 *   post:
 *     summary: Yangi dars qo'shish
 *     tags: [Lesson]
 *     description: Yangi dars ma'lumotlarini qo'shadi
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               lesson_theme:
 *                 type: string
 *               lesson_number:
 *                 type: string
 *               group_name:
 *                 type: string
 *               lesson_date:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Dars muvaffaqiyatli qo'shildi
 *       '400':
 *         description: Yomon so'rov, validatsiya xatosi
 *       '500':
 *         description: Ichki server xatosi
 */

/**
 * @swagger
 * /lesson:
 *   get:
 *     summary: Barcha darslarni olish
 *     tags: [Lesson]
 *     description: Barcha darslar ro'yxatini olish
 *     responses:
 *       '200':
 *         description: Barcha darslar muvaffaqiyatli olingan
 *       '500':
 *         description: Ichki server xatosi
 */

/**
 * @swagger
 * /lesson/{id}:
 *   get:
 *     summary: Darsni ID orqali olish
 *     tags: [Lesson]
 *     description: Berilgan ID ga ega darsni olish
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Dars ID si
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Dars muvaffaqiyatli topildi
 *       '404':
 *         description: Dars topilmadi
 *       '500':
 *         description: Ichki server xatosi
 */

/**
 * @swagger
 * /lesson/{id}:
 *   put:
 *     summary: Darsni yangilash
 *     tags: [Lesson]
 *     description: Berilgan ID ga ega darsni yangilash
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Dars ID si
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               lesson_theme:
 *                 type: string
 *               lesson_number:
 *                 type: string
 *               group_name:
 *                 type: string
 *               lesson_date:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Dars muvaffaqiyatli yangilandi
 *       '404':
 *         description: Dars topilmadi
 *       '500':
 *         description: Ichki server xatosi
 */

/**
 * @swagger
 * /lesson/{id}:
 *   delete:
 *     summary: Darsni o'chirish
 *     tags: [Lesson]
 *     description: Berilgan ID ga ega darsni o'chirish
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Dars ID si
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Dars muvaffaqiyatli o'chirildi
 *       '404':
 *         description: Dars topilmadi
 *       '500':
 *         description: Ichki server xatosi
 */

lesson.post("/", createLessons);
lesson.get("/", getLessons);
lesson.get("/:id", getLessonsById);
lesson.put("/:id", updateLessons);
lesson.delete("/:id", deleteLessons);

module.exports = { lesson };