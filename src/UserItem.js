import React, { Component } from "react";
import PropTypes from "prop-types";

class UserItem extends Component{
  render() {
    const { user, gameState } = this.props;
    const games = gameState ? user.games : "*";
    return (
      <div key={user.username}>
        {user.username} played {games} games
      </div>
    )
  }
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
  gamesState: PropTypes.bool
}

export default UserItem;