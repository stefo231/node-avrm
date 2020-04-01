import React from "react";

export default function UserList(props) {
  return props.users.length ? (
    <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>User Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {props.users.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.username}</td>
              <td>{val.email}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  ) : (
    <h2>Hi</h2>
  );
}
