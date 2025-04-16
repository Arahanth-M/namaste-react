import { REST_IMAGE } from '../utils/constants';

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="m-4 p-4 w-[250px] bg-gray-200 rounded-md  hover:bg-gray-400 ">
      <img alt="image" src={REST_IMAGE} />
      <h2>{resData.info.name}</h2>
      <h4>{resData.info.cuisines.join(', ')}</h4>
      <h4>{resData.info.avgRating}</h4>
      <h4>{resData.info.sla.slaString}</h4>
    </div>
  );
};

export const promotedRest = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white rounded-md">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
