const { Router } = require("express");
const { 
    createStuffRoleController, 
    getStuffRoleById, 
    updateStuffRole, 
    deleteStuffRole 
} = require("../controller/stuff.role.controller");

const stuffRoleRouter = Router();

/**
 * @swagger
 * tags:
 *   name: StuffRole
 */

/**
 * @swagger
 * /stuffRole:
 *   post:
 *     summary: Yangi StuffRole qo'shish
 *     tags: [StuffRole]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               stuffId:
 *                 type: string
 *                 description: Stuff ID si
 *               roleId:
 *                 type: string
 *                 description: Rol ID si
 *     responses:
 *       201:
 *         description: StuffRole muvaffaqiyatli qo'shildi
 *       500:
 *         description: Ichki server xatosi
 */
stuffRoleRouter.post("/", createStuffRoleController);

/**
 * @swagger
 * /stuffRole/{id}:
 *   get:
 *     summary: StuffRole ni ID orqali olish
 *     tags: [StuffRole]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli olingan StuffRole
 *       404:
 *         description: StuffRole topilmadi
 *       500:
 *         description: Server xatosi
 */
stuffRoleRouter.get("/:id", getStuffRoleById);

/**
 * @swagger
 * /stuffRole/{id}:
 *   put:
 *     summary: StuffRole ni yangilash
 *     tags: [StuffRole]
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
 *               stuffId:
 *                 type: string
 *                 description: Stuff ID si
 *               roleId:
 *                 type: string
 *                 description: Rol ID si
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli yangilandi
 *       404:
 *         description: StuffRole topilmadi
 *       500:
 *         description: Server xatosi
 */
stuffRoleRouter.put("/:id", updateStuffRole);

/**
 * @swagger
 * /stuffRole/{id}:
 *   delete:
 *     summary: StuffRole ni o'chirish
 *     tags: [StuffRole]
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
 *         description: StuffRole topilmadi
 *       500:
 *         description: Server xatosi
 */
stuffRoleRouter.delete("/:id", deleteStuffRole);

module.exports = { stuffRoleRouter };