const { tableModel } = require("../Schema/productSchema");

class tablesFilter {
  async ascending(req, res) {
    try {
      const ascending = await tableModel.find().sort({price: 1}).exec();
      res.render("pages/table", { ascending })
    } catch (error) {
      if(error){
        res.render("pages/error404Page")
      }
    }
  }

  async descending(req, res) {
    try {
      const descending = await tableModel.find().sort({price: -1}.exec();
      res.render("pages/table", { descending })
    } catch (error) {
      if(error){
        res.render("pages/error404Page")
      }
    }
  }
}

module.exports = tablesFilter;