import React from 'react';
import './static/scss/main.scss';
import MainHeader from "./Components/MainHeader";
import BrewerColumn from "./Components/BrewerColumn";
import SettingsModal from "./Components/SettingsModal";

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

  createColumnsWithApi = () => {
    const { brewersList, apiData } = this.state;

    return [1, 2, 3].map(id => <BrewerColumn key={id} id={id} apiData={apiData} brewersList={brewersList}/> )
  };

  createColumn = () => {
    const { brewersList } = this.state;

    return [1, 2, 3].map(id => <BrewerColumn key={id} brewersList={brewersList}/> )
  };

  fetchApiData = () => {
    // Fetch URL is coming from package.json -> http://ontariobeerapi.ca/
    fetch(`/products/`)
      .then(resp => resp.json())
      .then(resp => {
        this.setState({
          apiData: resp,
          dataFetched: true
        });
      })
      .catch((error) => { console.log(error)})
  };

  componentDidMount() {
    this.fetchApiData()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { dataFetched, brewersList } = this.state;
    if (dataFetched === true && brewersList.length === 0) {
      this.createBrewersList()
    }
  }

  render() {

    const { dataFetched } = this.state;

    return (
      <div className='content'>
        <div className='container'>
          <MainHeader/>

          <SettingsModal/>

          <div className='column-row'>
            { dataFetched ?
              this.createColumnsWithApi()
            :
              this.createColumn()
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
