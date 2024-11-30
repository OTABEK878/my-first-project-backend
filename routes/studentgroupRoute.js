const { Router } = require("express");
const { 
    createStudentGroupController, 
    getStudentGroups,  // Yangi qo'shilgan funksiya
    getStudentGroupById, 
    updateStudentGroup, 
    deleteStudentGroup 
} = require("../controller/studentgroup.controller");

const studentGroupRouter = Router();

/**
 * @swagger
 * tags:
 *   name: StudentGroup
 */

/**
 * @swagger
 * /studentGroupRouter:
 *   post:
 *     summary: Yangi StudentGroup qo'shish
 *     tags: [StudentGroup]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               student_id:
 *                 type: string
 *                 description: Student ID si
 *               group_id:
 *                 type: string
 *                 description: Group ID si
 *     responses:
 *       201:
 *         description: StudentGroup muvaffaqiyatli qo'shildi
 *       500:
 *         description: Ichki server xatosi
 */
studentGroupRouter.post("/", createStudentGroupController);

/**
 * @swagger
 * /studentGroupRouter:
 *   get:
 *     summary: Barcha StudentGroup larni olish
 *     tags: [StudentGroup]
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli olingan StudentGroup lar
 *       500:
 *         description: Server xatosi
 */
studentGroupRouter.get("/", getStudentGroups); // Yangi qo'shilgan endpoint

/**
 * @swagger
 * /studentGroupRouter/{id}:
 *   get:
 *     summary: StudentGroup ni ID orqali olish
 *     tags: [StudentGroup]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli olingan StudentGroup
 *       404:
 *         description: StudentGroup topilmadi
 *       500:
 *         description: Server xatosi
 */
studentGroupRouter.get("/:id", getStudentGroupById);

/**
 * @swagger
 * /studentGroupRouter/{id}:
 *   put:
 *     summary: StudentGroup ni yangilash
 *     tags: [StudentGroup]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
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
 *                 description: Student ID si
 *               group_id:
 *                 type: string
 *                 description: Group ID si
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli yangilandi
 *       404:
 *         description: StudentGroup topilmadi
 *       500:
 *         description: Server xatosi
 */
studentGroupRouter.put("/:id", updateStudentGroup);

/**
 * @swagger
 * /studentGroupRouter/{id}:
 *   delete:
 *     summary: StudentGroup ni o'chirish
 *     tags: [StudentGroup]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli o'chirildi
 *       404:
 *         description: StudentGroup topilmadi
 *       500:
 *         description: Server xatosi
 */
studentGroupRouter.delete("/:id", deleteStudentGroup);

module.exports = { studentGroupRouter };