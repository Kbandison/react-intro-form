import React from "react";

class FormHead extends React.Component {
  render() {
    return (
      <thead className="table-header">
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Date Added</th>
        </tr>
      </thead>
    );
  }
}
export default FormHead;
