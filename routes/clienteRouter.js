var express = require("express");
var clienteRouter = express.Router();

clienteRouter.get("/", async function (req, res) {
  const clientes = await global.crud.clienteCrud.getClientes();
  res.send({ clientes, status: 200 });
});

clienteRouter.get("/nome/:nome", async function (req, res) {
  const clientesByName = await global.crud.clienteCrud.getClientesByName(
    req.params.nome
  );
  return res.send({ clientesByName, status: 200 });
});

clienteRouter.get("/id/:id", async function (req, res) {
  const clientesById = await global.crud.clienteCrud.getClienteById(
    req.params.id
  );
  return res.send({ clientesById, status: 200 });
});

clienteRouter.post("/", async function (req, res) {
  const { nomeCompleto, sexo, dataNascimento, idade, cidade } = req.body;
  await global.crud.clienteCrud.addClientes({
    nomeCompleto,
    sexo,
    dataNascimento,
    idade,
    cidade,
  });
  res.send({ message: "Cliente cadastrada com sucesso!", status: 201 });
});

clienteRouter.put("/:id", async function (req, res) {
  updatedCliente = await global.crud.clienteCrud.updateCliente(
    req.params.id,
    req.body
  );
  return res.send({
    message: "Cliente atualizada com sucesso!",
    status: 200,
  });
});

clienteRouter.delete("/:id", function (req, res) {
  deleteCliente = global.crud.clienteCrud.deleteCliente(req.params.id);
  return res.send({ message: "Cliente excluido com sucesso!", status: 200 });
});

module.exports = clienteRouter;
