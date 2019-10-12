import React from 'react';
import ProductsList from "../ProductsList";

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
        <h4 className="small-heading column-item__heading">
          Hello
        </h4>

        <ProductsList/>
      </section>
    )
  }
}

export default BrewerColumn;