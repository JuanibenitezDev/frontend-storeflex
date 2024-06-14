import { Outlet } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ShowNavBar from "./components/ShowNavBar";

function App() {
  return (
    <div>
      <ShowNavBar>
        <div className="navbar">
          <Navbar />
        </div>
      </ShowNavBar>
      <Outlet />
      <ShowNavBar>
        <Footer />
      </ShowNavBar>
    </div>
  );
}

export default App;
