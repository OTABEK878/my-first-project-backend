const { Router } = require("express");
const {
    CreateRole,
    getRoles,
    getRoleById,
    updateRole,
    deleteRole,
} = require("../controller/role.controller");

const roles = Router();

/**
 * @swagger
 * tags:
 *   name: Roles
 */

/**
 * @swagger
 * /roles/role:
 *   post:
 *     summary: Yangi rol qo'shish
 *     tags: [Roles]
 *     description: Yangi rol ma'lumotlarini qo'shadi
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Rolning nomi
 *     responses:
 *       '201':
 *         description: Rol muvaffaqiyatli qo'shildi
 *       '400':
 *         description: Yomon so'rov, validatsiya xatosi
 *       '500':
 *         description: Ichki server xatosi
 */

/**
 * @swagger
 * /roles/roles:
 *   get:
 *     summary: Barcha rollarni olish
 *     tags: [Roles]
 *     description: Barcha rollar ro'yxatini olish
 *     responses:
 *       '200':
 *         description: Barcha rollar muvaffaqiyatli olingan
 *       '500':
 *         description: Ichki server xatosi
 */

/**
 * @swagger
 * /roles/roleById/{id}:
 *   get:
 *     summary: Rol ma'lumotlarini ID orqali olish
 *     tags: [Roles]
 *     description: Berilgan ID ga ega rol ma'lumotlarini olish
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Roli ID si
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Rol muvaffaqiyatli topildi
 *       '404':
 *         description: Rol topilmadi
 *       '500':
 *         description: Ichki server xatosi
 */

/**
 * @swagger
 * /roles/roleUpdate/{id}:
 *   put:
 *     summary: Roli yangilash
 *     tags: [Roles]
 *     description: Berilgan ID ga ega rolning ma'lumotlarini yangilash
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Roli ID si
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
 *     responses:
 *       '200':
 *         description: Rol muvaffaqiyatli yangilandi
 *       '404':
 *         description: Rol topilmadi
 *       '500':
 *         description: Ichki server xatosi
 */

/**
 * @swagger
 * /roles/roleDelete/{id}:
 *   delete:
 *     summary: Roli o'chirish
 *     tags: [Roles]
 *     description: Berilgan ID ga ega roli o'chirish
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Roli ID si
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Rol muvaffaqiyatli o'chirildi
 *       '404':
 *         description: Rol topilmadi
 *       '500':
 *         description: Ichki server xatosi
 */

roles.post("/role", CreateRole);
roles.get("/roles", getRoles);
roles.get("/roleById/:id", getRoleById);
roles.put("/roleUpdate/:id", updateRole);
roles.delete("/roleDelete/:id", deleteRole);

module.exports = { roles };