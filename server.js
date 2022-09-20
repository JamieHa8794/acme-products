const { syncAndSeed, models: {Product} } = require('./db');

const express = require('express');
const app = express()



app.get('/api/products', async (req, res, next)=>{
    try{
        const products = await Product.findAll()
        res.send(products)
    }
    catch(err){
        next(err)
    }
})


const init = async () =>{
    try{
        await syncAndSeed()
        const port = process.env.PORT || 3000;
        app.listen(port, ()=> console.log(`listening on port ${port}`))
    }
    catch(err){
        console.log(err)
    }
}

init();