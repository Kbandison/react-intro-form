import React from "react";

class FormHead extends React.Component {
  render() {
    return (
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Actors</th>
          <th>Plot</th>
          <th>Genre</th>
          <th>Rating</th>
          <th>Director</th>
          <th>Released</th>
          <th>Date Added</th>
        </tr>
      </thead>
    );
  }
}
export default FormHead;
