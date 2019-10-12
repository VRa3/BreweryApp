import React from 'react';
import './static/scss/main.scss';
import MainHeader from "./Components/MainHeader";
import BrewerColumn from "./Components/BrewerColumn";

class App extends React.Component {
  state = {
    apiData: {}
  };

  componentDidMount() {
    // Fetch URL is coming from package.json -> http://ontariobeerapi.ca/
    fetch(`/products/`)
      .then(resp => resp.json())
      .then(resp => {
        this.setState({apiData: resp});
        console.log(this.state.apiData)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <div className='content'>
        <div className='container'>
          <MainHeader/>

          <div>
            <BrewerColumn/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
