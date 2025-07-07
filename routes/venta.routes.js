const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/venta.controller');

/**
 * @swagger
 * components:
 *   schemas:
 *     Venta:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         nombre:
 *           type: string
 *         descripcion:
 *           type: string
 *         precio:
 *           type: number
 *     VentaInput:
 *       type: object
 *       required:
 *         - nombre
 *         - descripcion
 *         - precio
 *       properties:
 *         nombre:
 *           type: string
 *         descripcion:
 *           type: string
 *         precio:
 *           type: number
 */

/**
 * @swagger
 * /ventas:
 *   get:
 *     summary: Listar todas las ventas
 *     responses:
 *       200:
 *         description: Lista de ventas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Venta'
 */
router.get('/', ctrl.getAll);

/**
 * @swagger
 * /ventas/{id}:
 *   get:
 *     summary: Obtener una venta por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Venta encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Venta'
 *       404:
 *         description: No encontrado
 */
router.get('/:id', ctrl.getById);

/**
 * @swagger
 * /ventas:
 *   post:
 *     summary: Crear una nueva venta
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/VentaInput'
 *     responses:
 *       201:
 *         description: Venta creada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Venta'
 */
router.post('/', ctrl.create);

/**
 * @swagger
 * /ventas/{id}:
 *   put:
 *     summary: Actualizar una venta
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/VentaInput'
 *     responses:
 *       200:
 *         description: Venta actualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Venta'
 *       404:
 *         description: No encontrado
 */
router.put('/:id', ctrl.update);

/**
 * @swagger
 * /ventas/{id}:
 *   delete:
 *     summary: Eliminar una venta
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Venta eliminada correctamente
 *       404:
 *         description: No encontrado
 */
router.delete('/:id', ctrl.remove);

module.exports = router;
