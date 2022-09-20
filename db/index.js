const Sequelize = require('sequelize');
const { STRING } = Sequelize
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme_products');
const faker = require('faker')

const Product = db.define('product', {
    name:{
        type: STRING
    }
})

const syncAndSeed = async () =>{
    try{
        await db.sync({force: true})
        console.log('connected to db')
        const names = [];
        while (names.length < 50){
            names.push(faker.commerce.productName())
        }
        await Promise.all(names.map(name => Product.create({name})))
    }
    catch(err){
        console.log(err)
    }
}

module.exports = {
    db, 
    syncAndSeed,
    models: {
        Product
    }
}