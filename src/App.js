import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Activities from "./components/Activities";

function App() { 
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <News />
      <Activities />
    </div>
  );
}
export default App;