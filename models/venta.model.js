const mongoose = require('mongoose');

const ventaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  precio: { type: Number, required: true }
}, { versionKey: false });

module.exports = mongoose.model('Venta', ventaSchema);