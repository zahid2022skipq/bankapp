import React, { useState } from "react";
import data from "./utils/Data_Users";

function Transaction() {
  const handleSender = (id) => {
    setSenderId(id);
  };

  const handleReceiver = (id) => {
    setReceiverId(id);
  };

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
                <button onClick={handleSender(d.id)}> Sender </button>
                <button onClick={handleReceiver(d.id)}> Receiver </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {senderId !== "" ? <div> Sender Selected</div> : <div></div>}
      {receiverId !== "" ? <div> Receiver Selected</div> : <div></div>}
    </div>
  );
}

export default Transaction;
