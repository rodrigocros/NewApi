const uuid = require('uuid');
const customResourceResponse = require('../utils/constant');


class ProductService{
    constructor(productRepository){
        this.productRepository = productRepository;
    }

    async getAllProducts(){
        const products = await this.productRepository.getAllProducts();
        return products;
    }

    async getProductById(id){
        const product = await this.productRepository.getProductById(id);
        return product;
    }

    async createProduct(product){ 
        product.uuid = uuid.v4();
        const createdProduct = await this.productRepository.createProduct(product);
        return createdProduct;
    }

    async updateProduct(id, product){
        const updatedProduct = await this.productRepository.updateProduct(id, product);
        return updatedProduct;
    }

    async deleteProduct(id){
        const deletedProduct = await this.productRepository.deleteProduct(id);
        return deletedProduct;
    }
}

module.exports = ProductService;