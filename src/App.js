import Boxes from "./components/Boxes";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Instructors from "./components/Instructors";
import Learn from "./components/Learn";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Showcase from "./components/Showcase";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Showcase />
      <Newsletter />
      <Boxes />
      <Learn />
      <FAQ />
      <Instructors />
      <Contact />
      <Footer />
      <Modal />
    </div>
  );
}

export default App;
