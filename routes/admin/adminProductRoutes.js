const express = require("express");
const router = express.Router();

const adminMethods = require("../../controllers/adminController");
const Admin = new adminMethods();

router.get("/", Admin.adminLogIn);
router.get("/index", Admin.adminMainIndexPage);
router.get("/products", Admin.adminProductIndexPage);
router.get("/products/new", Admin.adminProductForm);
router.post("/products", Admin.adminProductPostForm);
router.get("/products/:id", Admin.adminProductShowPage);
router.get("/products/:id/edit", Admin.adminProductEditForm);
router.put("/products/:id", Admin.adminUpdateProduct);
router.delete("/products/:id", Admin.adminDeleteProduct);

module.exports = router;
