const express = require('express');

class IndexRoute{
  mainIndexRoute(req, res){
    res.render("pages/index")
  }
  featuredRoute(req, res){
    res.render("pages/featured")
  }
}

module.exports = IndexRoute;