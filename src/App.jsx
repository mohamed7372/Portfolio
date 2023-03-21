import Contact from "./components/Contact";
import Header from "./layout/Header";
import ListProjects from "./components/ListProjects";
import NavBar from "./layout/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <ListProjects />
      <Contact />
    </div>
  );
}

export default App;
