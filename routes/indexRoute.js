const express = require('express');

class IndexRoute{
  mainIndexRoute(req, res){
    res.render("pages/index")
  }
}

module.exports = IndexRoute;