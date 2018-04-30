import React from 'react';

const renderUsers = (users) => {
  return users.map(
    (user) => {

      let date = new Date(user.registered).toString();

      return (
        <div key={user.id.value == null ? user.email : user.id.value } className="card">
          <img src={user.picture.large} alt="profile" />
          <div className="cardContainer">
            <div className="topProfile">
              <h4><b>{user.name.first} {user.name.last}</b></h4> 
              <p>{user.email}</p>
            </div>
            <div className="bottomProfile">
              <p><b>Joined</b></p>
              <p>{date.slice(0, 3) + ', ' + date.slice(3, -11)}</p>
            </div>
          </div>
        </div>
      )
    }
  );

}

const UserList = (props) => {
  return (
    <div className="cardWrapper">
      <div className="cards">
        {renderUsers(props.users)}
      </div>
    </div>
  )
}

export default UserList;