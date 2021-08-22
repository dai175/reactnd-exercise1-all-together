import React, { Component } from "react";
import PropTypes from "prop-types";

class CreateUser extends Component{
  state = {
    user: {
      firstName: "",
      lastName: "",
      username: "",
      games: 0
    }
  }
  changeValue = event => {
    const { name, value } = event.target;
    this.setState(currentState => ({
      ...currentState,
      user: {
        ...currentState.user,
        [name]: value
      }
    }))
  }
  createUserHandler = event => {
    event.preventDefault();
    this.props.createUserHandler(this.state.user);
  }
  isFilled() {
    const { firstName, lastName, username } = this.state.user
    return firstName === "" || lastName === "" || username === ""
  }
  render() {
    return (
      <div className="Create-user">
        <form>
          <div>
            <label>
              First Name
              <input onChange={this.changeValue} name="firstName" value={this.state.user.firstName} />
            </label>
          </div>
          <div>
            <label>
              Last Name
              <input onChange={this.changeValue} name="lastName" value={this.state.user.lastName} />
            </label>
          </div>
          <div>
            <label>
              Username
              <input onChange={this.changeValue} name="username" value={this.state.user.username} />
            </label>
          </div>
          <button onClick={this.createUserHandler} disabled={this.isFilled()}>Add</button>
        </form>
      </div>
    )
  }
}

CreateUser.propTypes = {
  createUserHandler: PropTypes.func.isRequired
}

export default CreateUser;