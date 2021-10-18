# desafio-compasso
Para execução do projeto siga os passos abaixo:
### Configuração
----
* Edite o arquivo .env.example com as informações de seu ambiente.
* Para executar a aplicação, com o nodeJS e o mongodb instalado no seu sistema vá até a pasta raiz do projeto e digite os comandos:
  <code> npm install </code> and <code> npm start</code>
* Para rodar os testes unitários digite o comando: 
   <code> npm run test</code>
* E para gerar o relatório de cobertura de testes, execute o comando abaixo:
   <code>npm coverage</code>
&nbsp;

### Demo
----
Uma demonstração da API funcionando pode ser encontrado no endereço https://compasso-desafio.herokuapp.com/ com os seguintes endPoints :

##### cidade
* GET /cidade/
* GET /cidade/nome/:nome
* GET /cidade/estado/:estado
* POST /cidade/ 
  
-----
&nbsp;
##### cliente
* GET /cliente/
* GET /cliente/nome/:nome
* GET /cliente/id/:id
* POST /cliente/
* PUT /cliente/:id
* DELETE /cliente/:id

