import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId)

  if (resInfo === null) return <Shimmer />

  const { name, cuisines, costForTwo } = resInfo?.data?.cards[0]?.card?.card?.info

  const { itemCards } = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
  console.log('resInfo?.data?.cards[0]?.card?.card?.info', resInfo?.data?.cards[0]?.card?.card?.info)
  console.log(itemCards)
  console.log('resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?', resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card)

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwo}
      </p>
      <ul>
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name} - Rs. {item.card.info.defaultPrice / 100 || item.card.info.price / 100}</li>
        ))}
      </ul>
    </div>
  )
}

export default RestaurantMenu