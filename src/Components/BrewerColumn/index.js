import React from 'react';
import ProductsList from "../ProductsList";
import Dropdown from "../Dropdown";

class BrewerColumn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      brewerName: ''
    }
  }

  loadBeers = brewer => {
    this.setState({ brewerName: brewer })
  };

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