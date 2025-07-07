const service = require('../services/venta.service');

exports.getAll = async (req, res) => {
  res.json(await service.getAll());
};

exports.getById = async (req, res) => {
  const venta = await service.getById(req.params.id);
  if (!venta) return res.status(404).json({ mensaje: 'No encontrado' });
  res.json(venta);
};

exports.create = async (req, res) => {
  const venta = await service.create(req.body);
  res.status(201).json(venta);
};

exports.update = async (req, res) => {
  const venta = await service.update(req.params.id, req.body);
  if (!venta) return res.status(404).json({ mensaje: 'No encontrado' });
  res.json(venta);
};

exports.remove = async (req, res) => {
  const venta = await service.remove(req.params.id);
  if (!venta) return res.status(404).json({ mensaje: 'No encontrado' });
  res.json({ mensaje: 'Venta eliminada' });
};
