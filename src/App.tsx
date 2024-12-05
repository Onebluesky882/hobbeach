import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LiveChat from "./pages/LiveChat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LiveChat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
