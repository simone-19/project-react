import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Booklist from "./components/Booklist";

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Booklist />
      <Footer />
    </>
  );
}

export default App;
