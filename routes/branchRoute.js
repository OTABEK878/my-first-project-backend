const { Router } = require("express");
const {
    createBranch,
    getBranches,
    getBranchById,
    updateBranch,
    deleteBranch,
} = require("../controller/branch.controller");

const branches = Router();

/**
 * @swagger
 * tags:
 *   name: Branches
 */

/**
 * @swagger
 * /branches/branch:
 *   post:
 *     summary: Yangi filial qo'shish
 *     tags: [Branches]
 *     description: Yangi filial ma'lumotlarini qo'shadi
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Filialning nomi
 *               address:
 *                 type: string
 *                 description: Filial manzili
 *               call_number:
 *                 type: string
 *                 description: Filial telefon raqami
 *     responses:
 *       '201':
 *         description: Filial muvaffaqiyatli qo'shildi
 *       '400':
 *         description: Yomon so'rov, validatsiya xatosi
 *       '500':
 *         description: Ichki server xatosi
 */

/**
 * @swagger
 * /branches/branches:
 *   get:
 *     summary: Barcha filialarni olish
 *     tags: [Branches]
 *     description: Barcha filialar ro'yxatini olish
 *     responses:
 *       '200':
 *         description: Barcha filialar muvaffaqiyatli olingan
 *       '500':
 *         description: Ichki server xatosi
 */

/**
 * @swagger
 * /branches/branchById/{id}:
 *   get:
 *     summary: Filial ma'lumotlarini ID orqali olish
 *     tags: [Branches]
 *     description: Berilgan ID ga ega filial ma'lumotlarini olish
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Filial ID si
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Filial muvaffaqiyatli topildi
 *       '404':
 *         description: Filial topilmadi
 *       '500':
 *         description: Ichki server xatosi
 */

/**
 * @swagger
 * /branches/branchUpdate/{id}:
 *   put:
 *     summary: Filialni yangilash
 *     tags: [Branches]
 *     description: Berilgan ID ga ega filialning ma'lumotlarini yangilash
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Filial ID si
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               call_number:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Filial muvaffaqiyatli yangilandi
 *       '404':
 *         description: Filial topilmadi
 *       '500':
 *         description: Ichki server xatosi
 */

/**
 * @swagger
 * /branches/branchDelete/{id}:
 *   delete:
 *     summary: Filialni o'chirish
 *     tags: [Branches]
 *     description: Berilgan ID ga ega filialni o'chirish
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Filial ID si
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Filial muvaffaqiyatli o'chirildi
 *       '404':
 *         description: Filial topilmadi
 *       '500':
 *         description: Ichki server xatosi
 */

branches.post("/branch", createBranch);
branches.get("/branches", getBranches);
branches.get("/branchById/:id", getBranchById);
branches.put("/branchUpdate/:id", updateBranch);
branches.delete("/branchDelete/:id", deleteBranch);

module.exports = { branches };