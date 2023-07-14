import Navbar from "./components/common/navbar/Navbar";
import Login from "./components/common/navbar/Login";
import Drawer from "./components/common/drawer/Drawer";
import Homepage from "./components/homepage/Homepage";
import Footer from "./components/common/footer/Footer";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <>
      <header>
        <Navbar title="Navbar" login={Login()} />
      </header>

      <Drawer />

      <Homepage />

      <Footer />
    </>
  );
}

export default App;
