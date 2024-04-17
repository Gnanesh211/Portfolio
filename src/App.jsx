import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import LandingPage from "./pages/LandingPage";
import Layout from "./Layout";
// import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
        </Route>
        <Route path="/about" element={<Layout />}>
          <Route index element={<About />} />
        </Route>
        <Route path="/Skills" element={<Layout />}>
          <Route index element={<Skills />} />
        </Route>
        {/* <Route path="/projects" element={<Layout />}>
          <Route index element={<Projects />} />
        </Route> */}
        <Route path="/contact" element={<Layout />}>
          <Route index element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
