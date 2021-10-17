var express = require("express");
var cidadeRouter = express.Router();

cidadeRouter.get("/", async function (_, res) {
  const cidades = await global.crud.cidadeCrud.getCidades();
  return res.send({ cidades, status: 200 });
});

cidadeRouter.get("/nome/:nome", async function (req, res) {
  //console.log(req.params.nome, "=====================>");
  const cidadesByName = await global.crud.cidadeCrud.getCidadeByName(
    req.params.nome
  );
  return res.send({ cidadesByName, status: 200 });
});

cidadeRouter.get("/estado/:estado", async function (req, res) {
  const cidadesByState = await global.crud.cidadeCrud.getCidadeByState(
    req.params.estado
  );
  return res.send({ cidadesByState, status: 200 });
});

cidadeRouter.post("/", async function (req, res) {
  const { nome, estado } = req.body;
  await global.crud.cidadeCrud.addCidade({ nome, estado });
  res.send({ message: "Cidade cadastrada com sucesso!", status: 201 });
});

module.exports = cidadeRouter;
