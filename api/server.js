const express = require("express");

const accountsRouter = require('./accounts/accounts-router')

const server = express();

server.use(express.json());

server.use('/api/accounts', accountsRouter)

server.use('*', (req, res) => {
    res.status(404).json({
        message: 'Not Found'
    })
})

server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message
    })
})


module.exports = server;
