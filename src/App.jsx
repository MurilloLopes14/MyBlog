//* Styles
import "./App.css";

//* Components
import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div id="App">
        <Navbar />
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
