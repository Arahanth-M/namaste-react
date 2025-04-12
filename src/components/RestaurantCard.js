import { REST_IMAGE } from '../utils/constants';

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img alt="image" src={REST_IMAGE} className="res-logo" />
      <h2>{resData.info.name}</h2>
      <h4>{resData.info.cuisines}</h4>
      <h4>{resData.info.avgRating}</h4>
      <h4>{resData.info.sla.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
