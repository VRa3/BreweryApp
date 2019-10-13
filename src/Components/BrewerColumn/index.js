import React from 'react';
import ProductsList from "../ProductsList";
import Dropdown from "../Dropdown";

class BrewerColumn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      brewerName: '',
      apiData: this.props.apiData,
      beersList: []
    }
  }

  loadBeers = brewer => {
    const { apiData } = this.state;

    const filteredBeersArray = apiData.filter(item => item.brewer === brewer);

    this.setState({
      brewerName: brewer,
      beersList: filteredBeersArray
    });
  };

  componentDidUpdate() {
    const { apiData } = this.state;


    if (!apiData) {
      this.setState({apiData: this.props.apiData })
    }
  }

  render() {
    return (
      <section className='column-item'>
        <Dropdown loadBeers={this.loadBeers} brewersList={this.props.brewersList}/>

        <ProductsList beersList={this.state.beersList}/>
      </section>
    )
  }
}

export default BrewerColumn;