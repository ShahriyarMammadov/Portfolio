import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./assets/layouts/footer";
import Header from "./assets/layouts/header";
import HomePage from "./pages/home";
import GameCenter from "./pages/gameCenter";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/gamecenter" element={<GameCenter />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
