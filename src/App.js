import "./App.css";
import data from "./utils/Data_Users";
import { Link } from "react-router-dom";

function App() {
  return (
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
        <Link>Transfer Funds</Link>
      </div>
    </div>
  );
}

export default App;
