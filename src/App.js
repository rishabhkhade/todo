import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import ProgressBar from "./components/progress-bar/ProgressBar";
import Input from "./components/inputs-field/Input";
import Steps from "./components/steps/Steps";
import ToDo from "./components/todo/ToDo";
import Search from "./components/search/Search";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/progress" element={<ProgressBar />} />
          <Route path="/input" element={<Input />} />
          <Route path="/steps" element={<Steps />} />
          <Route path="/search" element={<Search />} />
          <Route path="/todo" element={<ToDo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
