import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./assets/layouts/footer";
import Header from "./assets/layouts/header";
import HomePage from "./pages/home";
import GameCenter from "./pages/gameCenter";
import Bar from "./assets/components/bar";

function App() {
  return (
    <div className="App">
      <Header />
      <Bar />

      <Routes>
        <Route path="/gamecenter" element={<GameCenter />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
