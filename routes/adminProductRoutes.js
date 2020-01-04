const express = require('express');
const router = express.Router();


router.get("/new", (req, res) =>{
  res.send("create a new product route")
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