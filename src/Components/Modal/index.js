import React from 'react';

const Modal = (props) => {
  return (
    <div className='modal__wrapper'
         style={{
           transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
           opacity: props.show ? '1' : '0'
         }}>
      <div className='modal__body'>
        <span className='modal__close-btn' onClick={props.close}>×</span>

        <div>
          {props.children}
        </div>
      </div>
    </div>
  )
};

export default Modal;