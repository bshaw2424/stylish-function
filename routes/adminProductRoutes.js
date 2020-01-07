const express = require('express');
const router = express.Router();

router.get("/", (req, res) => res.render("admin/admin-index"));

router.get("/products", (req, res) => res.render("admin/products"))

router.get("/add-product", (req, res) =>{
  res.render("admin/products-form")
});

router.post("/", (req, res) =>{
  res.send("this is the post router")
});

router.get("/login", (req, res) =>{
    res.render("admin/login")
});

router.get("/:id", (req, res) =>{
  res.send(req.params.id)
});

router.get("/:id/edit", (req, res) =>{
  res.send(req.params.id + " this is the edit section")
})

router.put("/:id", (req, res) =>{
  res.send("this is the put section")
});

router.delete("/:id", (req, res) =>{
  res.send("this is the delete section")
});



module.exports = router;