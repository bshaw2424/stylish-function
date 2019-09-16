const express = require('express');

class ErrorRoute{
    catchAllRoute(req, res){
        res.render("pages/error")
    }
}

module.exports = ErrorRoute;