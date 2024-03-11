import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'
import Shimmer from './Shimmer'

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState([])

  const [filteredRestaurant,setFilteredRestaurant] = useState([])
  const [searchText,setSearchText] = useState("")
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  return listOfRestaurants.length === 0 ? <Shimmer /> : (
    <div className="body">
      <div className="filter">
        <div className='search'>
          <input type="text" className='search-box' value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
          <button onClick={()=>{
           const filterRestaurant = listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
           setFilteredRestaurant(filterRestaurant);
          }}>Search</button>
        </div>
        <button className="filter-btn" onClick={() => {
          const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
          setListOfRestaurants(filteredList)
        }}>Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map(resturant => <RestaurantCard key={resturant.info.id} resData={resturant} />
        )}
      </div>
    </div>
  )
}

export default Body