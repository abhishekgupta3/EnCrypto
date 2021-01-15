import React from 'react';
import UserList from '../components/UserList.js'

function Users() {
	const UserArray = [
	  {
		id:1,
		name:"abhishek",
		image: "jpghi"
	  }
	]

  return (
  	<div>
    <UserList items={UserArray} />
    </div>
  );

}

export default Users;
