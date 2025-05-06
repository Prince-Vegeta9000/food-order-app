import react from "react";
import reactDOM from "react-dom/client";
/*
 - Header
    -logo
    -nav-items
-Body
    -search
    -res-container
    -res-card
    -res-card-image
    -res-card-name
    -res-card-cusines
    -res-card-rating
    -res-card-delivery
    -res-card-cost
    -res-card-time
- Footer
    -links
*/

const Header = () => {
  return (
    <div className="header">
      <img
        className="logo"
        src="https://img.freepik.com/premium-vector/premium-logo-template-2025_1271687-73.jpg?w=740"
        alt="logo"
      />
      <nav className="nav-items">
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Cart</a>
      </nav>
    </div>
  );
};

const ResCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-card-image"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/15e625b7-6a11-4d01-b82c-727eb90e5af6_798812.JPG"
        alt="res-card-image"
      />
      <div className="res-card-details">
        <h2 className="res-card-name">KFC</h2>
        <div className="res-card-rating-and-time">
          <h3 className="res-card-rating">4.4</h3>
          <h3 className="res-card-time">20 -25 mins</h3>
        </div>
        <h3 className="res-card-cuisines">Burgers,Fast Food,Rolls & Wraps</h3>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input className="search-input" type="text" placeholder="Search" />
        <button className="search-btn">Search</button>
      </div>
      <div className="res-container">
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
      </div>
    </div>
  );
};
const App = () => {
  return (
    <div className="app-layout">
      <Header />
      <Body />
      {/* <Footer />  */}
    </div>
  );
};

const root = reactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
