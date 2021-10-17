const addCidade = (cidade) => {
  const cidadeInserted = global.conn.collection("cidades").insertOne(cidade);
  console.log(cidadeInserted);
  return cidadeInserted;
};

const getCidades = () => {
  const cidades = global.conn.collection("cidades").find().toArray();
  return cidades;
};

const getCidadeByName = (name) => {
  const cidadeByName = global.conn
    .collection("cidades")
    .find({ nome: { $regex: name } })
    .toArray();
  return cidadeByName;
};

const getCidadeByState = (state) => {
  const cidadeByState = global.conn
    .collection("cidades")
    .find({ estado: { $regex: state } })
    .toArray();
  return cidadeByState;
};

module.exports = {
  addCidade,
  getCidades,
  getCidadeByName,
  getCidadeByState,
};
