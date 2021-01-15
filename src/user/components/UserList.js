import React from 'react';
import './UserList.css'
import UserItem from './UserItem.js'

function UserList(props) {
  
  	if(props.items.length===0) {
  		return (
  			<div><h1> No users found</h1></div>
  	    );
  	}

  	return(
  		
  		<ul> {props.items.map(user=> 
  			<UserItem 
  			key={user.id} 
  			id={user.id}
  			name={user.name} 
  			image={user.image} 
  			/>
  			)} 
  		</ul>
  	);

}

export default UserList;
