import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import SideBar from "./components/Sidebar";
import Home from "./components/Home";
import Player from "./components/Player";
// import Artist from "./components/Artist";
// import Tracks from "./components/Traks";
// import Ricerca from "./components/Ricerca";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideBar />
        <Player />
        <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
