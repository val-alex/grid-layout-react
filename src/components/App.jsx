import React, { Component } from 'react';
import UserList from './UserList';

const NUMBER_OF_USERS = '12';
const DATA_URL = `https://randomuser.me/api/?results=${NUMBER_OF_USERS}`;

class App extends Component  {
  constructor(props){
    super(props);
    this.state = {
      users: []
    }
  }

  fetchUserData(callback) {
    fetch(DATA_URL)
      .then(response => response.json())
      .then(data => {
        console.log(data.results);
        callback(data.results);
      });
  }

  componentDidMount() {
    this.fetchUserData(
      users => this.setState({users})
    );
  }

  loadData() {
    this.fetchUserData((data) => this.setState({users: [...this.state.users, ...data]}));
  }

  render() {
    return (
      <div>
        <div className="header"><h1>Website</h1></div>
        <UserList users={this.state.users}></UserList>
        <button className="btn" onClick={() =>this.loadData()}>Load More</button>
      </div>
    )
  }
  
}

export default App;