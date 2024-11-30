const { Router } = require("express");
const {
    createGroupStuff,
    getGroupStuffById,
    updateGroupStuff,
    deleteGroupStuff
} = require("../controller/groupstuff.controller");

const groupStuffRouter = Router();

/**
 * @swagger
 * tags:
 *   name: GroupStuff7
 */

/**
 * @swagger
 * /groupstuff/create:  # Guruh va stuffni bog'lash
 *   post:
 *     summary: Guruh va stuffni bog'lash
 *     tags: [GroupStuff7]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               group_id:
 *                 type: string
 *                 description: Guruh ID si
 *               stuff_id:
 *                 type: string
 *                 description: Stuff ID si
 *     responses:
 *       201:
 *         description: Bog'lanish muvaffaqiyatli yaratildi
 *       500:
 *         description: Server xatosi
 */
groupStuffRouter.post("/create", createGroupStuff);

/**
 * @swagger
 * /groupstuff/{id}:
 *   get:
 *     summary: Bog'lanishni ID orqali olish
 *     tags: [GroupStuff7]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli olingan
 *       404:
 *         description: Bog'lanish topilmadi
 *       500:
 *         description: Server xatosi
 */
groupStuffRouter.get("/:id", getGroupStuffById);

/**
 * @swagger
 * /groupstuff/{id}:
 *   put:
 *     summary: Bog'lanishni yangilash
 *     tags: [GroupStuff7]
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
 *               group_id:
 *                 type: string
 *                 description: Guruh ID si
 *               stuff_id:
 *                 type: string
 *                 description: Stuff ID si
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli yangilandi
 *       404:
 *         description: Bog'lanish topilmadi
 *       500:
 *         description: Server xatosi
 */
groupStuffRouter.put("/:id", updateGroupStuff);

/**
 * @swagger
 * /groupstuff/{id}:
 *   delete:
 *     summary: Bog'lanishni o'chirish
 *     tags: [GroupStuff7]
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
 *         description: Bog'lanish topilmadi
 *       500:
 *         description: Server xatosi
 */
groupStuffRouter.delete("/:id", deleteGroupStuff);

module.exports = { groupStuffRouter };