import React from 'react';
import beer from './../../static/icons/beer.svg';

const Product = props => {
  return (
    <li className='product-card'>
      <img className='product-card__thumbnail' src={props.image_url || beer} alt=''/>

      <div className='product-card__text-block'>
        <h5 className='product-card__title'>Name: {props.name || '...'}</h5>

        <span className='product-card__subtitle'>Type: {props.type || '...'}</span>
      </div>

      <div className="product-card__aside">
        <span>12$ / l.</span>
      </div>
    </li>
  )
};

export default Product;