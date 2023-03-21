import Contact from "./components/Contact";
import ListProjects from "./components/ListProjects";
import About from "./components/sections/About";
import Header from "./components/sections/Header";
import Work from "./components/sections/Work";
import NavBar from "./layout/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <About />
      <Work/>
      {/* <ListProjects />
      <Contact /> */}
    </div>
  );
}

export default App;
