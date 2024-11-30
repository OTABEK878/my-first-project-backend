const { Router } = require("express");
const {
    createStage,
    getStages,
    getStageById,
    updateStage,
    deleteStage,
} = require("../controller/stage.controller");

const stages = Router();

/**
 * @swagger
 * tags:
 *   name: Stages
 */

/**
 * @swagger
 * /stages/stage:
 *   post:
 *     summary: Yangi bosqich qo'shish
 *     tags: [Stages]
 *     description: Yangi bosqich ma'lumotlarini qo'shadi
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Bosqichning nomi
 *     responses:
 *       '201':
 *         description: Bosqich muvaffaqiyatli qo'shildi
 *       '400':
 *         description: Yomon so'rov, validatsiya xatosi
 *       '500':
 *         description: Ichki server xatosi
 */

/**
 * @swagger
 * /stages/stages:
 *   get:
 *     summary: Barcha bosqichlarni olish
 *     tags: [Stages]
 *     description: Barcha bosqichlar ro'yxatini olish
 *     responses:
 *       '200':
 *         description: Barcha bosqichlar muvaffaqiyatli olingan
 *       '500':
 *         description: Ichki server xatosi
 */

/**
 * @swagger
 * /stages/stageById/{id}:
 *   get:
 *     summary: Bosqich ma'lumotlarini ID orqali olish
 *     tags: [Stages]
 *     description: Berilgan ID ga ega bosqich ma'lumotlarini olish
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Bosqich ID si
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Bosqich muvaffaqiyatli topildi
 *       '404':
 *         description: Bosqich topilmadi
 *       '500':
 *         description: Ichki server xatosi
 */

/**
 * @swagger
 * /stages/stageUpdate/{id}:
 *   put:
 *     summary: Bosqichni yangilash
 *     tags: [Stages]
 *     description: Berilgan ID ga ega bosqichning ma'lumotlarini yangilash
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Bosqich ID si
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
 *         description: Bosqich muvaffaqiyatli yangilandi
 *       '404':
 *         description: Bosqich topilmadi
 *       '500':
 *         description: Ichki server xatosi
 */

/**
 * @swagger
 * /stages/stageDelete/{id}:
 *   delete:
 *     summary: Bosqichni o'chirish
 *     tags: [Stages]
 *     description: Berilgan ID ga ega bosqichni o'chirish
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Bosqich ID si
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Bosqich muvaffaqiyatli o'chirildi
 *       '404':
 *         description: Bosqich topilmadi
 *       '500':
 *         description: Ichki server xatosi
 */

stages.post("/stage", createStage);
stages.get("/stages", getStages);
stages.get("/stageById/:id", getStageById);
stages.put("/stageUpdate/:id", updateStage);
stages.delete("/stageDelete/:id", deleteStage);

module.exports = { stages };