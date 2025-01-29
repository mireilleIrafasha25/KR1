import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import About from "./component/About";
import Home from "./component/Home";
import Service from "./component/services"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
