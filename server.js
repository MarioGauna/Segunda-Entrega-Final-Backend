import express from 'express';
import routesProd from './routes/routesProd.js';
import routesCart from './routes/routesCart.js';
const app = express();



app.use(express.json());
app.use('/api/productos', routesProd);
app.use('/api/carrito', routesCart);
app.get('*',async(req, res)=>{
    res.status(404).json({"error": "Ruta no habilitada"})
})

const PORT=8080;
app.listen(PORT,()=>{
    console.log(`Servidor escuchando puerto ${PORT}`);
});