import React from 'react';
import './UserItem.css'

function UserItem(props) {
  return (
    <li> 
        <div> <h1> {props.name} </h1> </div>
        <div> <h1> hello </h1> </div>
        <div> <h1> {props.image} </h1> </div>
    </li>
  );
}

export default UserItem;
