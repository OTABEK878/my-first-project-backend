const { Router } = require("express");
const {
    createStuff,
    getStuff,
    getStuffById,
    updateStuff,
    deleteStuff,
} = require("../controller/stuff.controller");

const stuff = Router();

/**
 * @swagger
 * tags:
 *   name: Stuff
 */

/**
 * @swagger
 * /stuff/Stuff:
 *   post:
 *     summary: Yangi stuff qo'shish
 *     tags: [Stuff]
 *     description: Yangi stuff ma'lumotlarini qo'shadi
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *                 description: Stuffning ismi
 *               last_name:
 *                 type: string
 *                 description: Stuffning familiyasi
 *               phone_number:
 *                 type: string
 *                 description: Stuffning telefon raqami
 *               login:
 *                 type: string
 *                 description: Stuffning login nomi
 *               password:
 *                 type: string
 *                 description: Stuffning paroli
 *               is_active:
 *                 type: boolean
 *                 description: Stuff faoliyat holati
 *     responses:
 *       '201':
 *         description: Stuff muvaffaqiyatli qo'shildi
 *       '400':
 *         description: Yomon so'rov, validatsiya xatosi
 *       '500':
 *         description: Ichki server xatosi
 */

/**
 * @swagger
 * /stuff/GetStuff:
 *   get:
 *     summary: Barcha stufflarni olish
 *     tags: [Stuff]
 *     description: Barcha stufflar ro'yxatini olish
 *     responses:
 *       '200':
 *         description: Barcha stufflar muvaffaqiyatli olingan
 *       '500':
 *         description: Ichki server xatosi
 */

/**
 * @swagger
 * /stuff/GetStuffid/{id}:
 *   get:
 *     summary: Stuff ma'lumotlarini ID orqali olish
 *     tags: [Stuff]
 *     description: Berilgan ID ga ega stuff ma'lumotlarini olish
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Stuff ID si
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Stuff muvaffaqiyatli topildi
 *       '404':
 *         description: Stuff topilmadi
 *       '500':
 *         description: Ichki server xatosi
 */

/**
 * @swagger
 * /stuff/UpdateStuff/{id}:
 *   put:
 *     summary: Stuffni yangilash
 *     tags: [Stuff]
 *     description: Berilgan ID ga ega stuff ma'lumotlarini yangilash
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Stuff ID si
 *         schema:
 *           type: string
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
 *               login:
 *                 type: string
 *               password:
 *                 type: string
 *               is_active:
 *                 type: boolean
 *     responses:
 *       '200':
 *         description: Stuff muvaffaqiyatli yangilandi
 *       '404':
 *         description: Stuff topilmadi
 *       '500':
 *         description: Ichki server xatosi
 */

/**
 * @swagger
 * /stuff/DeleteStuff/{id}:
 *   delete:
 *     summary: Stuffni o'chirish
 *     tags: [Stuff]
 *     description: Berilgan ID ga ega stuffni o'chirish
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Stuff ID si
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Stuff muvaffaqiyatli o'chirildi
 *       '404':
 *         description: Stuff topilmadi
 *       '500':
 *         description: Ichki server xatosi
 */

stuff.post("/Stuff", createStuff);
stuff.get("/GetStuff", getStuff);
stuff.get("/GetStuffid/:id", getStuffById);
stuff.put("/UpdateStuff/:id", updateStuff);
stuff.delete("/DeleteStuff/:id", deleteStuff);

module.exports = { stuff };
