import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CreateUser from "./CreateUser";
import UserList from "./UserList";

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  state = {
    users: [
      { firstName: "Taro", lastName: "Yamada", username: "taroyamada", games: 10 },
      { firstName: "JIro", lastName: "Suzuki", username: "jirosuzuki", games: 20}
    ]
  }
  CreateUserHandler = (newUser) => {
    let isExists = false;
    this.state.users.map((user) => {
      if (user.username === newUser.username) {
        alert("User exists.")
        isExists = true;
      }
    })
    if (!isExists) {
      this.setState(currentState => ({
        ...currentState,
        users: [...currentState.users, newUser]
      }));
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <CreateUser createUserHandler={this.CreateUserHandler}/>
        <UserList users={this.state.users} />
      </div>
    );
  }
}

export default App;
