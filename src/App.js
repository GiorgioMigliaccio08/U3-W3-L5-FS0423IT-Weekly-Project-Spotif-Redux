import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
