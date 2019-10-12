import React from 'react';
import Chevron from "../SVGs/Chevron";
import ListItem from "../ProductsList/ListItem";

class Dropdown extends React.Component {
  state = {
    listOpen: false,
    headerTitle: this.props.title || 'Select brewer',
  };

  dropdownToggle = () => {
    this.setState({ listOpen: !this.state.listOpen })
  };

  selectOption = item => {
    const value = item.target.innerHTML;
    this.setState({ headerTitle: value, listOpen: false })
  };

  populateDropdownOptions = () => {
    const brewersArray = this.props.brewersList;

    return brewersArray.map(item => <ListItem selectOption={this.selectOption} key={item} brewerName={item}/>)
  };

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