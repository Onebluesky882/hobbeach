import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LiveChat from "./pages/LiveChat";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { GlobalContextProvider } from "./hooks/GlobalContext";

function App() {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LiveChat />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </GlobalContextProvider>
  );
}

export default App;
