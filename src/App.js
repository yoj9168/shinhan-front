import "./styles/reset.css";
import "./styles/global.css";
import TopNav from "./components/TopNav/TopNav";
import Home from "./pages/Home/Home";
import GlobalStock from "./pages/Home/GlobalStock"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="layout">   
    <TopNav></TopNav> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/global" element={<GlobalStock />} />
          <Route path="*" element={<div>페이지를 찾을 수 없습니다</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
