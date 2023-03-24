import "./App.css";
import About from "./component/about/About";
import Header from "./component/header/Header";
import Navigation from "./component/nav/Navigation";
import Experience from "./component/experience/Experience";
import Contact from "./component/contact/Contact";

function App() {
  return (
    <div className="">
      <Header />
      <Navigation />
      <About />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
