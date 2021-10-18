const { MongoClient } = require("mongodb");
const supertest = require("supertest");
require("dotenv").config();
const app = require("../app");

describe("Testes cidade", () => {
  let connection;
  // let db;

  beforeAll(async () => {
    process.env.MONGODATABASE = "meus_registros_test";
    connection = await MongoClient.connect(
      `mongodb://${process.env.MONGODBPATH}:${process.env.MONGODBPORT}`,
      {
        useNewUrlParser: true,
      }
    );
    db = await connection.db("meus_registros_test");
  });

  afterAll(async () => {
    await db.dropDatabase();
    await connection.close();
    // Para o jest encerrar a execução dos testes
    await setTimeout(() => process.exit(), 100);
  });

  it("Deve inserir uma cidade com sucesso", async () => {
    const cidade = db.collection("cidades");
    const mockCidade = { nome: "SAO PAULO", estado: "SAO PAULO" };
    await cidade.insertOne(mockCidade);
    await supertest
      .agent(app)
      .get("/cidade/nome/SAO PAULO")
      .expect(200)
      .then((response) => {
        const json = JSON.parse(response.text);
        expect(json.message[0].nome).toEqual("SAO PAULO");
      });
  });

  it("Deve retornar uma lista de cidades com sucesso", async () => {
    db.collection("cidades").drop();
    const cidade = db.collection("cidades");
    const mockCidade = [
      { nome: "SAO PAULO", estado: "SAO PAULO" },
      { nome: "RIO DE JANEIRO", estado: "RIO DE JANEIRO" },
      { nome: "SALVADOR", estado: "BAHIA" },
      { nome: "PORTO ALEGRE", estado: "RS" },
    ];
    await cidade.insertMany(mockCidade);
    await supertest
      .agent(app)
      .get("/cidade")
      .expect(200)
      .then((response) => {
        const json = JSON.parse(response.text);
        expect(json.message.length).toEqual(4);
      });
  });
});
