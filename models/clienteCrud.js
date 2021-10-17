const objectId = require("mongodb").ObjectId;

addClientes = (cliente) => {
  const clienteInserted = global.conn.collection("clientes").insertOne(cliente);
  return clienteInserted;
};

getClientes = () => {
  const clientes = global.conn.collection("clientes").find().toArray();
  return clientes;
};

getClientesByName = (name) => {
  const clientes = global.conn
    .collection("clientes")
    .find({ nome: name })
    .toArray();
  return clientes;
};
getClienteById = (id) => {
  const ObjectId = new objectId(id);

  const cliente = global.conn.collection("clientes").findOne({ _id: ObjectId });
  return cliente;
};

deleteCliente = (id) => {
  const ObjectId = new objectId(id);

  const clienteDeleted = global.conn
    .collection("clientes")
    .deleteOne({ _id: ObjectId });
  return clienteDeleted;
};

updateCliente = (id, cliente) => {
  const ObjectId = new objectId(id);
  const clienteUpdated = global.conn
    .collection("clientes")
    .updateOne({ _id: ObjectId }, { $set: cliente });
  return clienteUpdated;
};

module.exports = {
  addClientes,
  getClientes,
  getClientesByName,
  getClienteById,
  deleteCliente,
  updateCliente,
};
