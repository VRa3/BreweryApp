import React from 'react';
import beer from './../../static/icons/beer.svg';
import Modal from '../Modal';

class Product extends React.Component {
  state = {
    isShowing: false,
  };

  openModalHandler = () => {
    this.setState({
      isShowing: true
    });
  };

  closeModalHandler = () => {
    this.setState({
      isShowing: false
    });
  };

  render() {
    return (
      <li className='product-card'>
        <img className='product-card__thumbnail'  onClick={this.openModalHandler} src={this.props.image_url || beer} alt=''/>

        <div className='product-card__text-block'>
          <h5 className='product-card__title'>Name: {this.props.name || '...'}</h5>

          <span className='product-card__subtitle'>Type: {this.props.type || '...'}</span>
        </div>

        <div className='product-card__aside'>
          <span>12$ / l.</span>
        </div>

        { this.state.isShowing ?
          <div onClick={this.closeModalHandler} className='back-drop'>
            <Modal show={this.state.isShowing} close={this.closeModalHandler}>

              <figure>
                <img className='modal__image' src={this.props.image_url || beer} alt=''/>
                <figcaption className='modal__image-caption'>{this.props.name || '...'}</figcaption>
              </figure>

            </Modal>
          </div>
          : null }
      </li>
    )
  }
};

export default Product;