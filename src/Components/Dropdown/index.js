import React from 'react';
import Chevron from "../SVGs/Chevron";
import ListItem from "./ListItem";

class Dropdown extends React.Component {
  state = {
    listOpen: false,
    localStorageLoaded: false,
    headerTitle: 'Select brewer',
  };

  dropdownToggle = () => {
    this.setState({ listOpen: !this.state.listOpen })
  };

  selectOption = item => {
    const value = item.target.innerHTML;
    this.setState({ headerTitle: value, listOpen: false });

    this.props.loadBeers(value);

    const { columnId } = this.props;
    localStorage.setItem(`column_${columnId}`, `${value}`);
  };

  populateDropdownOptions = () => {
    const brewersArray = this.props.brewersList;

    return brewersArray.map(item => <ListItem selectOption={this.selectOption} key={item} brewerName={item}/>)
  };

  getBrewerFromLocalStorage = () => {
    const {columnId} = this.props;
    const {localStorageLoaded} = this.state;
    const storageItem = localStorage.getItem(`column_${columnId}`);

    if (columnId && !localStorageLoaded && storageItem) {
      this.setState({ headerTitle: storageItem, localStorageLoaded: true })
    }
  };

  componentDidUpdate() {
    this.getBrewerFromLocalStorage();
  }

  render() {
    const { headerTitle, listOpen } = this.state;

    return (
      <div className='dropdown'>
        <div className='dropdown__header'>
          <h5 className="dropdown__title" onClick={this.dropdownToggle}>
            {headerTitle}

            <span>
              <Chevron/>
            </span>
          </h5>
        </div>

        {listOpen &&
        <ul className='dropdown__list'>
          {this.populateDropdownOptions()}
        </ul>
        }
      </div>
    )
  }
}

export default Dropdown