import Contact from "./components/Contact";
import ListProjects from "./components/ListProjects";
import About from "./components/sections/About";
import Header from "./components/sections/Header";
import NavBar from "./layout/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <About/>
      {/* <ListProjects />
      <Contact /> */}
    </div>
  );
}

export default App;
