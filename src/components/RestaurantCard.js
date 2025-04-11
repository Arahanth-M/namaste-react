import { REST_IMAGE } from '../utils/constants';

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img alt="image" src={REST_IMAGE} className="res-logo" />
      <h2>{resData.name}</h2>
      <h4>{resData.cuisines}</h4>
      <h4>{resData.rating}</h4>
      <h4>{resData.cuisines}</h4>
      <h4>{resData.costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
