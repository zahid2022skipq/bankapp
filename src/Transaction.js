import React, { useState } from "react";
import data from "./utils/Data_Users";

function Transaction() {
  const [senderId, setSenderId] = useState("");
  const [receiverId, setReceiverId] = useState("");

  return (
    <div className="App">
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Balance</th>
            <th>Select Sender</th>
            <th>Select Receiver</th>
          </tr>
          {data.map((d) => (
            <tr key={d.id}>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>{d.currentBalance}</td>
              <td>
                <button onClick={() => setSenderId(d.id)}> Sender </button>
              </td>
              <td>
                <button onClick={() => setReceiverId(d.id)}> Receiver </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {senderId !== "" ? (
        <div className="Sender">
          Sender Selected:{" "}
          {data.map((id) => (id.id === senderId ? id.name : ""))}
        </div>
      ) : (
        <div> </div>
      )}
      {receiverId !== "" ? (
        <div className="Receiver">
          Receiver Selected:{" "}
          {data.map((id) => (id.id === receiverId ? id.name : ""))}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Transaction;
