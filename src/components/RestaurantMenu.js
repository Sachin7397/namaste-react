import React,{ useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId)

  const [showIndex,setShowIndex] = useState(0)

  if (resInfo === null) return <Shimmer />

  const { name, cuisines, costForTwo } = resInfo?.data?.cards[0]?.card?.card?.info

  const { itemCards } = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
  console.log('resInfo?.data?.cards[0]?.card?.card?.info', resInfo?.data?.cards[0]?.card?.card?.info)
  console.log(itemCards)
  console.log('resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?', resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

  const categories =  resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=> c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

  
  return (
    <div className="text-center">
      <h1 className="font-bold m-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - ₹{costForTwo/100} for Two
      </p>
      {categories.map((category,index)=>(
        //controlled component
        <RestaurantCategory 
        key={category?.card?.card?.info?.title} 
        data={category?.card?.card}
        showItems={index === showIndex ? true : false}
        setShowIndex={()=>setShowIndex(index)}
        />
      ))}
    </div>
  )
}

export default RestaurantMenu