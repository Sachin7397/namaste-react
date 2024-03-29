import { render, screen } from "@testing-library/react";
import RestaurantCard, { withOpenLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"

it("Should render RestaurantCard component with props Data",()=>{

  render(<RestaurantCard resData={MOCK_DATA}/>)
  const name = screen.getByText("EatFit")
  expect(name).toBeInTheDocument()
});   

 it("Should render ResaturantCard component with open label",()=>{
  // render( withOpenLabel(RestaurantCard)
  // <RestaurantCard resData={MOCK_DATA}/>)
 
 });