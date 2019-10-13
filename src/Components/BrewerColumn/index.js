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
    const { apiData, beersList } = this.state;

    this.setState({ brewerName: brewer }, () => {
      for (let beer in apiData) {
        if (apiData[beer].brewer === brewer) {
          beersList.push(apiData[beer])
        }
      }
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

        <ProductsList/>
      </section>
    )
  }
}

export default BrewerColumn;