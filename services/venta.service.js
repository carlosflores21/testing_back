const Venta = require('../models/venta.model');

const getAll = () => Venta.find();

const getById = (id) => Venta.findById(id);

const create = (data) => Venta.create(data);

const update = (id, data) => Venta.findByIdAndUpdate(id, data, { new: true });

const remove = (id) => Venta.findByIdAndDelete(id);

module.exports = { getAll, getById, create, update, remove };
