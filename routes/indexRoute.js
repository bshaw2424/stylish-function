const express = require('express');

class IndexRoute{
  mainIndexRoute(req, res){
    res.render("pages/index")
  }
  trendingRoute(req, res){
    res.render("pages/trends")
  }
}

module.exports = IndexRoute;