import "../App.scss";
import { Routes, Route } from "react-router-dom";
import { CustomNavbar } from "../utils/elements/CustomNavbar";
import { CustomFooter } from "../utils/elements/CustomFooter";
import { Home } from "../domain/Home";

const App = () => {
  return (
    <div className="App">
      <CustomNavbar />
      <div id="main">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <CustomFooter />
    </div>
  );
};

export default App;
