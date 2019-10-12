import React from 'react';
import beer from './../../static/icons/beer.svg';

const Product = props => {
  return (
    <li className='product-card'>
      <img className='product-card__thumbnail' src={props.imageUrl || beer} alt=''/>

      <div className='product-card__text-block'>
        <h5 className='product-card__title'>{props.name || 'Nazwa'}</h5>

        <span className='product-card__subtitle'>type: {props.type || 'Typ'}</span>
      </div>

      <div className="product-card__aside">
        <span>12$ / l.</span>
      </div>
    </li>
  )
};

export default Product;