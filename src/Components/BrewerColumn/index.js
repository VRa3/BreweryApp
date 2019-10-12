import React from 'react';
import ProductsList from "../ProductsList";
import Dropdown from "../Dropdown";

class BrewerColumn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      test: true,
    }
  }

  render() {
    return (
      <section className='column-item'>
        <Dropdown brewersList={this.props.brewersList}/>

        <h4 className="small-heading column-item__heading">
          Hello
        </h4>

        <ProductsList/>
      </section>
    )
  }
}

export default BrewerColumn;