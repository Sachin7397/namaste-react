import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {

  const [resInfo, setResInfo] = useState(null)

  const { resId } = useParams();

  // const  params = useParams();


  // console.log('params', params)

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId)

    const json = await data.json()

    console.log('json', json)
    setResInfo(json)
  }

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