import React from "react";
import { render } from "react-dom";

const Product = ({product}) =>{
    return(
        <li>
            {product.name}
        </li>
    )
}

export default Product;