import Course from "./components/Course";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
      </Routes>
      {/* <Home />
      <Course /> */}
    </>
  );
}

export default App;
