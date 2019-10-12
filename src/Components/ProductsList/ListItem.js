import React from 'react';

const ListItem = props => {
  return(
    <li onClick={props.selectOption}>{props.brewerName}</li>
  )
};

export default ListItem;