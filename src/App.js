import "./App.css";
import data from "./utils/Data_Users";
import { Routes, Route, Link } from "react-router-dom";
import Transaction from "./Transaction";

function App() {
  return (
    <>
      <div className="App">
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Balance</th>
            </tr>
            {data.map((d) => (
              <tr key={d.id}>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.currentBalance}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <Link to="transaction">Transfer Funds</Link>
        </div>
      </div>

      <Routes>
        <Route exact path="/*" element={<App />} />
        <Route exact path="/transaction" element={<Transaction />} />
      </Routes>
    </>
  );
}

export default App;
