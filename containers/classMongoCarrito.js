import mongoose from "mongoose";
import configDB from "../config/configDB.js";

mongoose.connect(configDB.mongoDB.url,configDB.mongoDB.options)

class contCart{
    constructor(collectionName,docSchema){
        this.collection = mongoose.model(collectionName,docSchema)
    }
    async createCart(){
        try {
            return await this.collection.create({});
        } catch (error) {
            console.log('Hubo un error al crear el carrito',error)
        }
    }
    async deleteCart(id){
        try {
            const result = await this.collection.deleteOne({_id:id});
            if(result.deletedCount == 0){
                return null
            }else {
                return result
            }
        } catch (error) {
            console.log('Hubo un error al mostrar la base de datos',error)
        }
    }
    async addToCart(id,obj){
        try {
            
        } catch (error) {
            console.log('Hubo un error al obtener el producto seleccionado',error)
        }
    }
    async delProdById(id,idp){
        try {
            
        } catch (error) {
            console.log('Hubo un error al actualizar el producto seleccionado',error)
        }
    }
}

export default contCart;