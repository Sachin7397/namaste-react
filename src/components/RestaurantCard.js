import React from 'react'
import { CDN_URL } from '../utils/constants'

const RestaurantCard = (props) => {
  const { resData } = props
  
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla
  } = resData?.info
  return (
    <div data-testid="resCard" className="m-4 p-4 w-[250px] rounded-lg bg-gray-50 hover:bg-gray-100">
      <img className="h-[170px] w-[250px] rounded-lg" src={ CDN_URL + cloudinaryImageId} alt="res-logo" />
      <h3 className='font-bold py-4 text-lg'>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} minutes</h4>
    </div>
  )
}

//Higher Order Component

//Input - RestaurantCard ==>> RestaurantCardOpen

export const withOpenLabel = (RestaurantCard) =>{

  return(props) =>{
    return(
      <div>
         <label className='absolute bg-black text-white m-2 p-2 rounded-lg'>Open</label>
         <RestaurantCard {...props}/>
      </div>
    )  
  }
}

export default RestaurantCard