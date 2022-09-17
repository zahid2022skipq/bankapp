import "./App.css";
import data from "./utils/Data_Users";

function App() {
  // const [customer, setCustomer] = useState("");

  return (
    <div className="App">
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>View</th>
          </tr>
          {data.map((d) => (
            <tr key={d.id}>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>
                <div>
                  <button>Show</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
