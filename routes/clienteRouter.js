var express = require("express");
var clienteRouter = express.Router();

const {
  listaClientes,
  getClientesByName,
  getClientesById,
  inserirCliente,
  alterarCliente,
  apagarCliente,
} = require("../services/clienteService");

clienteRouter.get("/", function (req, res) {
  const clientes = listaClientes();
  clientes.then((data) => {
    res.status(data.status).json(data);
  });
});

clienteRouter.get("/nome/:nome", function (req, res) {
  const clientesByName = getClientesByName(req.params.nome);
  clientesByName.then((data) => {
    res.status(data.status).json(data);
  });
});

clienteRouter.get("/id/:id", async function (req, res) {
  const clientesById = getClientesById(req.params.id);
  clientesById.then((data) => {
    res.status(data.status).json(data);
  });
});

clienteRouter.post("/", async function (req, res) {
  const { nomeCompleto, sexo, dataNascimento, idade, cidade } = req.body;
  const clienteInserted = inserirCliente({
    nomeCompleto,
    sexo,
    dataNascimento,
    idade,
    cidade,
  });
  clienteInserted.then((data) => {
    res.status(data.status).json(data);
  });
});

clienteRouter.put("/:id", async function (req, res) {
  updatedCliente = alterarCliente(req.params.id, req.body);
  updatedCliente.then((data) => {
    res.status(data.status).json(data);
  });
});

clienteRouter.delete("/:id", function (req, res) {
  deleteCliente = apagarCliente(req.params.id);
  deleteCliente.then((data) => {
    res.status(data.status).json(data);
  });
});

module.exports = clienteRouter;
