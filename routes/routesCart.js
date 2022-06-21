import { Router } from "express";
import { valorDao as prodApi} from "../dao/index.js";

const router = new Router();


router.post('/',async(req,res)=>{
    const result = await prodApi.createCart();
    res.status(200).json({"success" : "Carrito creado con ID "+ result._id})
})

router.delete('/:id',async(req,res)=>{
    const { id } = req.params;
	const result = await prodApi.deleteCart(id);
    result 
    ? res.status(200).json({"success" : "Carrito Borrado"})
    : res.status(400).json({"error": "ID Inexistente"})
})

router.post('/:id/productos',async(req,res)=>{
    
})

router.get('/:id/productos',async(req,res)=>{
	
})

router.delete('/:id/productos/:id_prod',async(req,res)=>{
    
})

export default router