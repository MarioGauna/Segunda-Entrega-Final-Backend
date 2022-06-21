import dotenv from 'dotenv';
dotenv.config();

let valorDao
    switch (process.env.DB_NAME) {
        case 'mongoDBP':
            import('./productos/productsMongoDao.js').then(({initProd})=>{
                valorDao = new initProd()
            })
            break;
        case 'mongoDBC':
            import('./carritos/cartMongoDao.js').then(({initCart})=>{
                valorDao = new initCart()
            })
        default:
            break;
    }

export {valorDao};