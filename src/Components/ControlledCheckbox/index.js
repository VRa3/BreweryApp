import React, {  useState } from 'react';

const ControlledCheckbox = props => {
  const [ isChecked, toggleCheck ] = useState(!props.lightTheme);

  return (
    <div className='custom-field'>
      <label className='custom-field__label' htmlFor={props.identificator} >{props.labelValue}</label>
      <input checked={isChecked} onChange={() => {props.functionToDo(); toggleCheck(!isChecked)}} id={props.identificator} className='custom-field__input' type='checkbox'/>
    </div>
  )
};

export default ControlledCheckbox;