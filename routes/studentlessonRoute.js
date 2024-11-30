const { Router } = require("express");
const {
    createStudentLesson,
    getStudentLessons,
    getStudentLessonById,
    updateStudentLesson,
    deleteStudentLesson,
} = require("../controller/studentlesson.controller");

const studentLessonRouter = Router();

/**
 * @swagger
 * tags:
 *   name: StudentLesson
 */

/**
 * @swagger
 * /studentlesson:
 *   post:
 *     summary: Yangi StudentLesson qo'shish
 *     tags: [StudentLesson]
 *     description: Yangi StudentLesson qo'shadi
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               student_id:
 *                 type: string
 *               lesson_id:
 *                 type: string
 *               is_there:
 *                 type: boolean
 *               reason:
 *                 type: string
 *               be_paid:
 *                 type: boolean
 *     responses:
 *       '201':
 *         description: StudentLesson muvaffaqiyatli qo'shildi
 *       '400':
 *         description: Yomon so'rov, validatsiya xatosi
 *       '500':
 *         description: Ichki server xatosi
 */

/**
 * @swagger
 * /studentlesson:
 *   get:
 *     summary: Barcha StudentLesson'larni olish
 *     tags: [StudentLesson]
 *     description: Barcha StudentLesson ro'yxatini olish
 *     responses:
 *       '200':
 *         description: Barcha StudentLesson muvaffaqiyatli olingan
 *       '500':
 *         description: Ichki server xatosi
 */

/**
 * @swagger
 * /studentlesson/{id}:
 *   get:
 *     summary: StudentLesson'ni ID orqali olish
 *     tags: [StudentLesson]
 *     description: Berilgan ID ga ega StudentLesson'ni olish
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: StudentLesson ID si
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: StudentLesson muvaffaqiyatli topildi
 *       '404':
 *         description: StudentLesson topilmadi
 *       '500':
 *         description: Ichki server xatosi
 */

/**
 * @swagger
 * /studentlesson/{id}:
 *   put:
 *     summary: StudentLesson'ni yangilash
 *     tags: [StudentLesson]
 *     description: Berilgan ID ga ega StudentLesson'ni yangilash
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: StudentLesson ID si
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               student_id:
 *                 type: string
 *               lesson_id:
 *                 type: string
 *               is_there:
 *                 type: boolean
 *               reason:
 *                 type: string
 *               be_paid:
 *                 type: boolean
 *     responses:
 *       '200':
 *         description: StudentLesson muvaffaqiyatli yangilandi
 *       '404':
 *         description: StudentLesson topilmadi
 *       '500':
 *         description: Ichki server xatosi
 */

/**
 * @swagger
 * /studentlesson/{id}:
 *   delete:
 *     summary: StudentLesson'ni o'chirish
 *     tags: [StudentLesson]
 *     description: Berilgan ID ga ega StudentLesson'ni o'chirish
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: StudentLesson ID si
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: StudentLesson muvaffaqiyatli o'chirildi
 *       '404':
 *         description: StudentLesson topilmadi
 *       '500':
 *         description: Ichki server xatosi
 */

studentLessonRouter.post("/", createStudentLesson);
studentLessonRouter.get("/", getStudentLessons);
studentLessonRouter.get("/:id", getStudentLessonById);
studentLessonRouter.put("/:id", updateStudentLesson);
studentLessonRouter.delete("/:id", deleteStudentLesson);

module.exports = { studentLessonRouter };