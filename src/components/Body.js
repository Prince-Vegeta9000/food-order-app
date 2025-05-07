import data from "../utils/mockData.json";
import ResCard from "./ResCard";
const Body = () => {
  const { restaurants } = data;
  return (
    <div className="body">
      <div className="search">
        <input className="search-input" type="text" placeholder="Search" />
        <button className="search-btn">Search</button>
      </div>
      <div className="res-container">
        {restaurants.map((restaurantDetails) => (
          <ResCard
            key={restaurantDetails.id}
            restaurantDetails={restaurantDetails}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
