import "./App.css";
import Footer from "./assets/layouts/footer";
import Header from "./assets/layouts/header";
import HomePage from "./pages/home";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
