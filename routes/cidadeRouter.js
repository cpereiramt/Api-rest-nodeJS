var express = require("express");
var cidadeRouter = express.Router();

const {
  getCidades,
  getCidadeByName,
  getCidadeByState,
  inserirCidade,
} = require("../services/cidadeService");

cidadeRouter.get("/", async function (_, res) {
  const cidades = getCidades();
  cidades.then((data) => {
    res.status(data.status).json(data);
  });
});

cidadeRouter.get("/nome/:nome", async function (req, res) {
  //console.log(req.params.nome, "=====================>");
  const cidadesByName = getCidadeByName(req.params.nome);
  cidadesByName.then((data) => {
    res.status(data.status).json(data);
  });
});

cidadeRouter.get("/estado/:estado", async function (req, res) {
  const cidadesByState = getCidadeByState(req.params.estado);
  cidadesByState.then((data) => {
    res.status(data.status).json(data);
  });
});

cidadeRouter.post("/", async function (req, res) {
  const { nome, estado } = req.body;
  const cidadeInserida = inserirCidade({ nome, estado });
  cidadeInserida.then((data) => {
    res.status(data.status).json(data);
  });
});

module.exports = cidadeRouter;
