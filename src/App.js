import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import ProgressBar from "./components/progress-bar/ProgressBar";
import Input from "./components/inputs-field/Input";
import Steps from "./components/steps/Steps";
import ToDo from "./components/todo/ToDo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/progress" element={<ProgressBar />} />
          <Route path="/input" element={<Input />} />
          <Route path="/steps" element={<Steps />} />
          <Route path="/todo" element={<ToDo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
