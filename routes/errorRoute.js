const express = require('express');

function errorMessage(req, res){
    res.status(404);
    res.render("pages/error404Page");
}

module.exports = {errorMessage};