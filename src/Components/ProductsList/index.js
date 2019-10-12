import React from 'react';
import Product from "./Product";

const ProductsList = () => {
  return (
    <ol className='products-list'>
      <Product/>
    </ol>
  )
};

export default ProductsList;