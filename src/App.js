import axios from 'axios';
import React, {Component} from 'react';

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
                        <li key={idx}>
                            {product.name}
                        </li>
                        )
                    })
                    :
                    ''
                }
                </ul>
            </div>
        )
    }
}

export default App;