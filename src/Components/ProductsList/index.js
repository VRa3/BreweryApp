import React from 'react';
import Product from "./Product";

const ProductsList = props => {
  return (
    <ol className='products-list'>
      { props.beersList.map((beer, ndx) => {
        if ( (ndx * 1) < 15 ) {
          return (
            <Product key={beer.product_id} {...beer} />
          )
        }})
      }
    </ol>
  )
};

export default ProductsList;