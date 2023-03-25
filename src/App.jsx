import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Header from "./components/sections/Header";
import Project from "./components/sections/Project";
import Work from "./components/sections/Work";
import NavBar from "./layout/NavBar";

function App() {
  return (
    <div className="App w-full">
      <NavBar />
      <Header />
      <About />
      <Work />
      <Project />
      <Contact/>
      
    </div>
  );
}

export default App;
