const errorMessage = (req, res) =>{
    res.status(404).render("pages/error404Page");
};

module.exports = {errorMessage};