import About from "./components/sections/About";
import Build from "./components/sections/Build";
import Contact from "./components/sections/Contact";
import Header from "./components/sections/Header";
import Project from "./components/sections/Project";
import Work from "./components/sections/Work";
import SocialMedia from "./components/ui/SocialMedia";
import Footer from "./layout/Footer";
import NavBar from "./layout/NavBar";
import Logo from './assets/img/logo.png'

function App() {
  return (
    <div className="App w-full overflow-hidden">
      <NavBar />
      <Header />
      <About />
      <Work />
      <Build/>
      <Project />
      <Contact/>
      
      <Footer />
    
    </div>
  );
}

export default App;
