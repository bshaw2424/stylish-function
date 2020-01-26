const express = require('express');
const router = express.Router();
const featured = require("../models/productsModel");


router.get("/:id", async (req, res) => {
  const show = await featured.findById(req.params.id).exec()
  res.render("pages/indexShow", {show})
});

router.post("/", async (req, res) =>{
  try {
    const feature = featured.create(req.body.featured);
    console.log(featured)
    res.redirect("/")
  } catch (error) {
    console.log(error)
  }
})

router.delete("/:id", async (req, res) => {
  try{
   await featured.findByIdAndRemove(req.params.id);
  console.log("item(s) was removed successfully")
  res.redirect("/")
  }catch(error){
    console.log(error)
  }

})
module.exports = router;