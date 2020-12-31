import React from "react";
import "./App.css";
import Routes from "./routes";
import Footer from "./components/Home/Footer/Footer";
import Header from "./components/Home/Header/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
