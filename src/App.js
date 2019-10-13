import React from 'react';
import './static/scss/main.scss';
import MainHeader from "./Components/MainHeader";
import BrewerColumn from "./Components/BrewerColumn";

class App extends React.Component {
  state = {
    dataFetched: false,
    apiData: {},
    brewersList: []
  };

  createBrewersList = () => {
    const {apiData} = this.state;
    const brewersArray = [];

    for (let beer in apiData) {
      brewersArray.push(apiData[beer].brewer)
    }

    const brewersSet = [...new Set(brewersArray)]; // Contains unique Brewers name

    this.setState({ brewersList: brewersSet })
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

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { dataFetched, brewersList } = this.state;
    if (dataFetched === true && brewersList.length === 0) {
      this.createBrewersList()
    }
  }

  render() {

    const { dataFetched, brewersList, apiData } = this.state;

    return (
      <div className='content'>
        <div className='container'>
          <MainHeader/>

          <div>
            { dataFetched ?
              <BrewerColumn apiData={apiData} brewersList={brewersList}/>
            :
              <BrewerColumn brewersList={brewersList}/>
            }

          </div>
        </div>
      </div>
    );
  }
}

export default App;
