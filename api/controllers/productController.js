const productController = {};
const mongoose = require("mongoose");
const productModel = require("../models/productModel");

productController.getProduct = async (req, res) => {
    const id = req.params.id;
    try {
        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({message: 'böyle bir ürün bulunamadı.'});
        }
        const product = await productModel.findById(id);
        return res.status(200).json(product);
    }
    catch(error) {
        res.status(400).json({message : error.message});
    }
};

productController.getAllProducts = async (req, res) => {
    const allProducts = await productModel.find();
    return res.status(200).json(allProducts);
};

productController.createProduct = (req, res) => {

};

productController.updateProduct = (req, res) => {

};

productController.deleteProduct = async (req, res) => {
    const id = req.params.id;
    try {
        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({message : 'böyle bir ürün bulunamadı.'});
        }
        await productModel.findByIdAndDelete(id);
        res.status(204).json({message: 'ürün başarıyla silindi.'});
    }
    catch(error) {
        return res.status(400).json({message: error.message});
    }
};

module.exports = productController;