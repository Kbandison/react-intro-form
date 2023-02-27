import React from "react";

class DeleteButton extends React.Component {
  render() {
    return (
      <button onClick={this.props.deleteAllMovies}>Delete All Movies</button>
    );
  }
}

export default DeleteButton;
