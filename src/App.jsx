import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import Featured from "./Featured";
import Value from "./value";
import Contact from "./Contact";
import "./index.css";
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Featured />
      <Value />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
