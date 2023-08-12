using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace repository
{
    public class productRepository.js
    {
        consturctor(productModel){
            this.productModel = productModel;
        }

        addProduct(uuid, name, price, description){
            this.productModel.create({
                uuid: uuid,
                name: name,
                price: price,
                description: description
            })
        };
        getAllProducts(){
            return this.productModel.findAll();
        };
        getProductById(uuid){
            return this.productModel.findOne({
                where: {
                    uuid: uuid
                }
            })
        };
        updateProduct(uuid, name, price, description){
            this.productModel.update({
                name: name,
                price: price,
                description: description
            }, {
                where: {
                    uuid: uuid
                }
            })
        };
        deleteProduct(uuid){
            this.productModel.destroy({
                where: {
                    uuid: uuid
                }
            })
        };

    }
}

module.exports = {
    productRepository
};