const { seatingModel } = require("../Schema/productSchema");

class seatingFilter {
  async ascending(req, res) {
    try {
      const ascending = await seatingModel.find().sort({price: 1}).exec();
      res.render("pages/seating", { ascending })
    } catch (error) {
      if(error){
        res.render("pages/error404Page")
      }
    }
  }

  async descending(req, res) {
    try {
      const descending = await seatingModel.find().sort({price: -1}.exec();
      res.render("pages/seating", { descending })
    } catch (error) {
      if(error){
        res.render("pages/error404Page")
      }
    }
  }
}

module.exports = seatingFilter;
