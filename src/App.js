import axios from 'axios';
import React, {Component} from 'react';
import Product from './Product';

class App extends Component {
    constructor(){
        super();
        this.state = {
            products : []
        }
    }
    async componentDidMount(){
        const products = (await axios.get('/api/products')).data
        this.setState({products: products})
    }
    render(){
        const {products} = this.state
        return(
            <div>
                <h1>
                    Products
                </h1>
                <ul>
                    {products.length ? 
                    products.map((product, idx) =>{
                        return(
                            <Product product={product} key={product.id}/>
                        )
                    })
                    :
                    'No Products'
                }
                </ul>
            </div>
        )
    }
}

export default App;