import React from "react";

class DeleteButton extends React.Component {
  render() {
    return (
      <button onClick={this.props.deleteAllMovies} className="delete-all">
        Delete All
      </button>
    );
  }
}

export default DeleteButton;
