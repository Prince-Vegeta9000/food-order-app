import react from "react";
import reactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app-layout">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = reactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
