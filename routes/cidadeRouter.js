var express = require('express');
var cidadeRouter = express.Router();

cidadeRouter.get('/', function (req, res) {
    res.send('respond with a resource');
});

cidadeRouter.get('/nome/:nome', function (req, res) {
    res.send('respond with a resource');
});

cidadeRouter.get('/estado/:estado', function (req, res) {
    res.send('respond with a resource');
});

cidadeRouter.post('/', function (req, res) {
    res.send('respond with a resource');
});


module.exports = cidadeRouter;