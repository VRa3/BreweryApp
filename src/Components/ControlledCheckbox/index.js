import React from 'react';

class ControlledCheckbox extends React.Component {
  state = {
    isChecked: !this.props.lightTheme
  };

  handleChange = () => {
    this.setState( { isChecked: !this.state.isChecked })
  };

  render() {
    return (
      <div className="custom-field">
        <label className="custom-field__label" htmlFor="themeColor">Dark mode?</label>
        <input checked={this.state.isChecked} onChange={() => {this.props.toggleThemeColor(); this.handleChange()}} className="custom-field__input" id="themeColor" type="checkbox"/>
      </div>
    )
  }
}

export default ControlledCheckbox;