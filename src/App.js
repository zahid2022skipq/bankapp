import "./App.css";
import data from "./utils/Data_Users";
import { Routes, Route } from "react-router-dom";
import Transaction from "./Transaction";
import ShowUsers from "./ShowUsers";
// import Transaction from "./Transaction"

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<ShowUsers data={data} />} />
          <Route path="/transaction" element={<Transaction />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
