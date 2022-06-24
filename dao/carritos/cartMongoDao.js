//import mongoose from "mongoose";
import contCart from "../../containers/classMongoCarrito.js";

export class initCart extends contCart{
    constructor(){
        super('carrito',{
            timestamp:{type:Date,default: Date.now},
            products: []
        })
    }
}