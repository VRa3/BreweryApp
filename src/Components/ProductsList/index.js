import React from 'react';
import Product from "./Product";

const ProductsList = props => {
  return (
    <ol className='products-list'>
      { props.beersList.map((beer, ndx) => {
        if ( ndx < ( 15 * props.multiplier ) ) {
          return <Product key={beer.product_id} {...beer} />
        } return null })
      }
    </ol>
  )
};

export default ProductsList;