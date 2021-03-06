import React from 'react';
import Modal from '../Modal';
import ControlledCheckbox from '../ControlledCheckbox';

class SettingsModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowing: false,
      lightTheme: true,
      amountToShow: 15,
      sortingBy: 'name'
    }
  }

  openModalHandler = () => { this.setState({ isShowing: true }) };

  closeModalHandler = () => { this.setState({ isShowing: false }) };

  toggleThemeColor = () => {
    this.setState({ lightTheme: !this.state.lightTheme });

    const switchTheme = () => {
      if (this.state.lightTheme) {
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.removeAttribute('data-theme');
      }
    };

    switchTheme();
  };

  setAmountToShow = (value) => { this.setState({ amountToShow: Number(value) }) };

  setSortingType = (value) => { this.setState({ sortingBy: value }) };

  render() {
    return (
      <>
      <div onClick={this.openModalHandler} className='modal-toggler'>
        <svg className='modal-toggler__icon' width='30' fill='#fff' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512'><path d='M628.3 358.3l-16.5-9.5c.8-8.5.8-17.1 0-25.6l16.6-9.5c9.5-5.5 13.8-16.7 10.5-27-7.2-23.4-19.9-45.4-36.7-63.5-7.4-8.1-19.3-9.9-28.7-4.4l-16.5 9.5c-7-5-14.4-9.3-22.2-12.8v-19c0-11-7.5-20.3-18.2-22.7-23.9-5.4-49.3-5.4-73.2 0-10.7 2.4-18.2 11.8-18.2 22.7v19c-7.8 3.5-15.2 7.8-22.2 12.8l-16.5-9.5c-9.5-5.5-21.3-3.7-28.7 4.4-16.7 18.1-29.4 40.1-36.7 63.4-3.3 10.4 1.2 21.8 10.6 27.2l16.5 9.5c-.8 8.5-.8 17.1 0 25.6l-16.6 9.5c-9.3 5.4-13.8 16.9-10.5 27.1 7.2 23.4 19.9 45.4 36.7 63.5 7.4 8 19.2 9.8 28.7 4.4l16.5-9.5c7 5 14.4 9.3 22.2 12.8v19c0 11 7.5 20.3 18.2 22.7 12 2.7 24.3 4 36.6 4s24.7-1.3 36.6-4c10.7-2.4 18.2-11.8 18.2-22.7v-19c7.8-3.5 15.2-7.8 22.2-12.8l16.5 9.5c9.4 5.4 21.3 3.6 28.7-4.4 16.7-18.1 29.4-40.1 36.7-63.4 3.3-10.4-1.2-21.9-10.6-27.3zm-51.6 7.2l29.4 17c-5.2 14.3-13 27.8-22.8 39.5l-29.4-17c-21.4 18.3-24.5 20.1-51.1 29.5v34c-15.1 2.6-30.6 2.6-45.6 0v-34c-26.9-9.5-30.2-11.7-51.1-29.5l-29.4 17c-9.8-11.8-17.6-25.2-22.8-39.5l29.4-17c-4.9-26.8-5.2-30.6 0-59l-29.4-17c5.2-14.3 13-27.7 22.8-39.5l29.4 17c21.4-18.3 24.5-20.1 51.1-29.5v-34c15.1-2.5 30.7-2.5 45.6 0v34c26.8 9.5 30.2 11.6 51.1 29.5l29.4-17c9.8 11.8 17.6 25.2 22.8 39.5l-29.4 17c4.9 26.8 5.2 30.6 0 59zm-96.7-94c-35.6 0-64.5 29-64.5 64.5s28.9 64.5 64.5 64.5 64.5-29 64.5-64.5-28.9-64.5-64.5-64.5zm0 97c-17.9 0-32.5-14.6-32.5-32.5s14.6-32.5 32.5-32.5 32.5 14.6 32.5 32.5-14.6 32.5-32.5 32.5zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm0-224c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96zM48 480c-8.8 0-16-7.2-16-16v-41.6C32 365.9 77.9 320 134.4 320c19.6 0 39.1 16 89.6 16 19.2 0 38-3.3 56.5-8.7.5-11.6 1.8-23 4.2-34-8.9 2.7-30.1 10.7-60.7 10.7-47.1 0-60.8-16-89.6-16C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h337c-16-8.6-30.6-19.5-43.5-32H48z'/></svg>

        <span className='modal-toggler__text'>Options</span>
      </div>

      { this.state.isShowing ?
        <div className='back-drop'>
          <Modal show={this.state.isShowing} close={this.closeModalHandler}>

            <ControlledCheckbox identificator='themeColor' labelValue='Dark mode?' lightTheme={this.state.lightTheme} functionToDo={this.toggleThemeColor}/>

            <div className='custom-field'>
              <label className='custom-field__label' htmlFor='listingAmount'>How many elements should be loaded on list?</label>

              <select onChange={(e) => this.setAmountToShow(e.target.value)} className='custom-field__select' name='listingAmount' id='listingAmount'>
                <option value='15'>15</option>
                <option value='30'>30</option>
              </select>
            </div>

            <div className='custom-field'>
              <label className='custom-field__label' htmlFor='sortListingBy'>Sorting type in listing:</label>

              <select onChange={(e) => this.setSortingType(e.target.value)} className='custom-field__select' name='sortListingBy' id='sortListingBy'>
                <option value='name'>name</option>
                <option value='price'>price</option>
                <option value='type'>type</option>
              </select>
            </div>
          </Modal>
        </div>
        : null }
      </>
    )
  }
}

export default SettingsModal;