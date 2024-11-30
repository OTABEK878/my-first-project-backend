const { Router } = require("express");
const {
    createStudent,
    getStudents,
    getStudentById,
    updateStudent,
    deleteStudent,
} = require("../controller/student.controller");

const studentRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Student
 */

/**
 * @swagger
 * /studentRouter/students:
 *   post:
 *     summary: Yangi talaba qo'shish
 *     tags: [Student]
 *     description: Yangi talaba qo'shadi
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               lid_id:
 *                 type: string
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               phone_number:
 *                 type: string
 *               birthday:
 *                 type: string
 *                 format: date
 *               gender:
 *                 type: string
 *                 enum: [male, female]
 *     responses:
 *       '201':
 *         description: Talaba muvaffaqiyatli qo'shildi
 *       '400':
 *         description: Yomon so'rov, validatsiya xatosi
 *       '500':
 *         description: Ichki server xatosi
 */
studentRouter.post("/students", createStudent);

/**
 * @swagger
 * /studentRouter/students:
 *   get:
 *     summary: Barcha talabalarni olish
 *     tags: [Student]
 *     description: Barcha talabalar ro'yxatini olish
 *     responses:
 *       '200':
 *         description: Barcha talabalar muvaffaqiyatli olingan
 *       '500':
 *         description: Ichki server xatosi
 */
studentRouter.get("/students", getStudents);

/**
 * @swagger
 * /studentRouter/students/{id}:
 *   get:
 *     summary: Talaba ma'lumotlarini ID orqali olish
 *     tags: [Student]
 *     description: Berilgan ID ga ega talabani olish
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Talaba ID si
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Talaba muvaffaqiyatli topildi
 *       '404':
 *         description: Talaba topilmadi
 *       '500':
 *         description: Ichki server xatosi
 */
studentRouter.get("/students/:id", getStudentById);

/**
 * @swagger
 * /studentRouter/students/{id}:
 *   put:
 *     summary: Talabani yangilash
 *     tags: [Student]
 *     description: Berilgan ID ga ega talabani yangilash
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
 *               lid_id:
 *                 type: string
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               phone_number:
 *                 type: string
 *               birthday:
 *                 type: string
 *                 format: date
 *               gender:
 *                 type: string
 *                 enum: [male, female]
 *     responses:
 *       '200':
 *         description: Talaba muvaffaqiyatli yangilandi
 *       '404':
 *         description: Talaba topilmadi
 *       '500':
 *         description: Ichki server xatosi
 */
studentRouter.put("/students/:id", updateStudent);

/**
 * @swagger
 * /studentRouter/students/{id}:
 *   delete:
 *     summary: Talabani o'chirish
 *     tags: [Student]
 *     description: Berilgan ID ga ega talabani o'chirish
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Talaba ID si
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Talaba muvaffaqiyatli o'chirildi
 *       '404':
 *         description: Talaba topilmadi
 *       '500':
 *         description: Ichki server xatosi
 */
studentRouter.delete("/students/:id", deleteStudent);

module.exports = { studentRouter };
