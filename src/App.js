import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Boutique from "./pages/boutique";
import About from "./pages/domicile";
import Marche from "./pages/marche";
import NotFound from "./pages/PageNotFound";
// import BlocGu from "./pages/bloc";

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <div className="container">
          <Routes>
            <Route path="/" element={<Boutique />} />
            <Route path="domicile" element={<About />} />
            <Route path="marche" element={<Marche />} />
            {/* <Route path="bloc" element={<BlocGu />} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
