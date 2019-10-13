import React from 'react';
import beer from './../../static/icons/beer.svg';
import Modal from '../Modal';

class Product extends React.Component {
  state = {
    isShowing: false,
    amount: 0,
    capacity: 0,
    price: 0,
    pricePerLitre: 0
  };

  openModalHandler = () => { this.setState({ isShowing: true }) };

  closeModalHandler = () => { this.setState({ isShowing: false }) };

  handleProductAmount = () => {
    const sizeString = this.props.size;

    const indexOfDivider = sizeString.indexOf('  ×');


    this.setState({ amount: sizeString.substr(0, indexOfDivider) });
  };

  handleProductCapacity = () => {
    const sizeString = this.props.size;

    const indexOfDivider = sizeString.indexOf('×  ');

    const secondDivider = sizeString.indexOf(' ml');

    const format = sizeString.substring(indexOfDivider + 3, secondDivider);

    this.setState({ capacity: format.replace(/[^0-9]/g, '') });
  };

  handleProductPrice = () => {
    this.setState({ price:  this.props.price})
  };

  getProductData = () => {
    this.handleProductAmount();
    this.handleProductCapacity();
    this.handleProductPrice();
  };

  countPriceForLitre = () => {
    const { capacity, amount, price } = this.state;
    const divider = 1000;
    const capacityInLitres = (amount * capacity) / divider ;

    const result = price / capacityInLitres;

    return result.toFixed(2);
  };

  componentDidMount() {
    this.getProductData();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { capacity, amount, price } = this.state;

    if (capacity && amount && price) {
      this.countPriceForLitre();
    }
  }

  render() {
    const { image_url, name, type } = this.props;

    return (
      <li className='product-card'>
        <img className='product-card__thumbnail'  onClick={this.openModalHandler} src={image_url || beer} alt=''/>

        <div className='product-card__text-block'>
          <h5 className='product-card__title'>Name: {name || '...'}</h5>

          <span className='product-card__subtitle'>Type: {type || '...'}</span>
        </div>

        <div className='product-card__aside'>
          <span>{this.countPriceForLitre()} $/l</span>
        </div>

        { this.state.isShowing ?
          <div onClick={this.closeModalHandler} className='back-drop'>
            <Modal show={this.state.isShowing} close={this.closeModalHandler}>

              <figure>
                <img className='modal__image' src={image_url || beer} alt=''/>
                <figcaption className='modal__image-caption'>{name || '...'}</figcaption>
              </figure>

            </Modal>
          </div>
          : null }
      </li>
    )
  }
};

export default Product;