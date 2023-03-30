import About from "./components/sections/About";
import Build from "./components/sections/Build";
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
      <Build/>
      <Project />
      <Contact/>
      
    </div>
  );
}

export default App;
