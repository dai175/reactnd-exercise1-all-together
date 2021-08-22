import React, { Component } from "react";
import PropTypes from "prop-types";
import UserItem from "./UserItem";

class UserList extends Component {
  CAPTION_HIDE = "Hide the Number of Games Played";
  CAPTION_SHOW = "Show the Number of Games Played";
  state = {
    gamesState: true,
    buttonCaption: this.CAPTION_HIDE
  }
  changeGamesState = () => {
    const buttonCaption = this.state.gamesState ? this.CAPTION_SHOW : this.CAPTION_HIDE;
    this.setState(currentState => ({
      gamesState: !currentState.gamesState,
      buttonCaption: buttonCaption
    }))
  }
  render() {
    const { users } = this.props
    return (
      <div className="User-list">
        <h2>User List</h2>
        <button onClick={this.changeGamesState}>{this.state.buttonCaption}</button>
        {
          users.map((user) => (
            <UserItem
              key={user.username}
              user={user}
              gameState={this.state.gamesState}
            />
          ))
        }
      </div>
    )
  }
}

UserList.propTypes = {
  users: PropTypes.array.isRequired
}

export default UserList;