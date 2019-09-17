const express = require('express');

class ErrorRoute {
    error404Route(req, res) {
        res.status(404).render("pages/error404Page")
    }
}

module.exports = ErrorRoute;