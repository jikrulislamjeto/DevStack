
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechExplorer from "./components/TechExplorer";
import Footer from "./components/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>

      <Navbar />

      <main>
        <Hero />
        <TechExplorer />

      </main>

      <ToastContainer />

      <Footer />

    </>
  );
}

export default App;