import Rating from "./Rating";

const ResCard = ({ restaurantDetails }) => {
  const { name, rating, cuisine, deliveryTime, image } = restaurantDetails;
  return (
    <div className="res-card">
      <img className="res-card-image" src={image} alt="res-card-image" />
      <div className="res-card-details">
        <h2 className="res-card-name">{name}</h2>
        <div className="res-card-rating-and-time">
          <h3 className="res-card-rating">
            <Rating rating={rating} />
          </h3>
          <h3 className="res-card-time">{deliveryTime}</h3>
        </div>
        <h3 className="res-card-cuisines">{cuisine.join(",")}</h3>
      </div>
    </div>
  );
};

export default ResCard;
