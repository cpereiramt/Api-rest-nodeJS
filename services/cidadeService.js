const sanitizeStringFunction = require("../utils/sanitizeString");

const getCidades = async () => {
  const listarCidades = await global.crud.cidadeCrud.getCidades();
  console.log(listarCidades);
  if (listarCidades.length === 0) {
    return { message: "Nenhuma cidade encontrada", status: 404 };
  } else {
    return { message: listarCidades, status: 200 };
  }
};

const getCidadeByName = async (nome) => {
  const sanitizeNome = sanitizeStringFunction(nome);
  const cidadeByName = await global.crud.cidadeCrud.getCidadeByName(
    sanitizeNome
  );
  if (cidadeByName.length === 0) {
    return { message: "Nenhuma cidade encontrada", status: 404 };
  }
  return { message: cidadeByName, status: 200 };
};

const getCidadeByState = async (estado) => {
  const sanitizeEstado = sanitizeStringFunction(estado);

  const cidadeByState = await global.crud.cidadeCrud.getCidadeByState(
    sanitizeEstado
  );
  if (cidadeByState.length === 0) {
    return { message: "Nenhuma cidade encontrada", status: 404 };
  }
  return { message: cidadeByState, status: 200 };
};

const inserirCidade = async (cidade) => {
  if (cidade.nome === undefined || cidade.nome === null) {
    return { message: "Nome da cidade não informado", status: 400 };
  }
  if (cidade.estado === undefined || cidade.estado === null) {
    return { message: "Estado não informado", status: 400 };
  }

  const sanitizeNome = sanitizeStringFunction(cidade.nome);
  const sanitizeEstado = sanitizeStringFunction(cidade.estado);
  const newCidade = {
    nome: sanitizeNome,
    estado: sanitizeEstado,
  };

  const inserirCidade = await global.crud.cidadeCrud.addCidade(newCidade);
  return { message: "Cidade inserida com sucesso !", status: 200 };
};

module.exports = {
  getCidades,
  getCidadeByName,
  getCidadeByState,
  inserirCidade,
};
