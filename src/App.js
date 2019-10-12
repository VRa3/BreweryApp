import React from 'react';
import './static/scss/main.scss';
import MainHeader from "./Components/MainHeader";
import BrewerColumn from "./Components/BrewerColumn";

class App extends React.Component {
  state = {
    apiData: {},
    dataFetched: false,
  };

  createBrewersList = () => {
    const {apiData} = this.state;
    const brewersArray = [];

    for (let beer in apiData) {
      brewersArray.push(apiData[beer].brewer)
    }

    const brewersSet = [...new Set(brewersArray)]; // Contains unique Brewers name

    console.log(brewersSet);
  };

  componentDidMount() {
    // Fetch URL is coming from package.json -> http://ontariobeerapi.ca/
    fetch(`/products/`)
      .then(resp => resp.json())
      .then(resp => {
        this.setState({
          apiData: resp,
          dataFetched: true
        });
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {

    if (this.state.dataFetched) {
      this.createBrewersList()
    }

    return (
      <div className='content'>
        <div className='container'>
          <MainHeader/>

          <div>
            <button onClick={this.createBrewersList}>Sortuj piwowarów</button>

            <BrewerColumn/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
