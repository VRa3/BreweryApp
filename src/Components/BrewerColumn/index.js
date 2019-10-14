import React from 'react';
import ProductsList from "../ProductsList";
import Dropdown from "../Dropdown";

class BrewerColumn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      brewerName: '',
      apiData: this.props.apiData,
      beersList: [],
      loaderMultiplier: 1 // This number is multiplied by 15 inside ProductsList component
    }
  }

  sortByName = function ( a, b ) {
    if ( a.name < b.name ){
      return -1;
    }
    if ( a.name > b.name ){
      return 1;
    }
      return 0;
  };

  loadBeers = brewer => {
    const { apiData } = this.state;

    if (apiData) {
      const filteredBeersArray = apiData.filter(item => item.brewer === brewer);

      filteredBeersArray.sort( this.sortByName );

      this.setState({
        brewerName: brewer,
        beersList: filteredBeersArray,
        loaderMultiplier: 1
      });
    }
  };

  increaseMultiplier = () => {
    this.setState({loaderMultiplier: this.state.loaderMultiplier + 1});
  };

  componentDidUpdate() {
    const { apiData } = this.state;


    if (!apiData) {
      this.setState({apiData: this.props.apiData })
    }
  }

  render() {
    const { beersList, loaderMultiplier } = this.state;

    return (
      <section className='column-item'>
        <Dropdown columnId={this.props.id} loadBeers={this.loadBeers} brewersList={this.props.brewersList}/>

        <ProductsList multiplier={loaderMultiplier} beersList={beersList}/>

        { beersList.length > ( loaderMultiplier * 15 ) ?
          <button className='column-item__load-button' onClick={this.increaseMultiplier}>Load more</button>
          : null
        }
      </section>
    )
  }
}

export default BrewerColumn;