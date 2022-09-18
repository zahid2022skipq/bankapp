import React from "react";
import { Link } from "react-router-dom";
function ShowUsers(props) {
  return (
    <div className="App">
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Balance</th>
          </tr>
          {props.data.map((d) => (
            <tr key={d.id}>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>{d.currentBalance}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <Link to="/transaction">Make Transaction</Link>
      </div>
    </div>
  );
}

export default ShowUsers;
