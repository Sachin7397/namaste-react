import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils"
import Body from "../Body"
import MOCK_DATA from "../mocks/mockResListData.json"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    }
  })
});

it("Should Search Res List for Burger text input", async () => {
  await act(async () => render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  ));

  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(20);

  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput")
  // const searchInput = screen.getByRole('textbox')
  fireEvent.change(searchInput, { target: { value: "burger" } });
  fireEvent.click(searchBtn)
  //screen should load 3 cards
  const cardsAfterSearch = screen.getAllByTestId("resCard");
  expect(cardsAfterSearch.length).toBe(3);
  expect(searchBtn).toBeInTheDocument();


});

it("Should filter Top Rated Restaurant", async () => {
  await act(async () => render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  ));

  const cardsBeforeFilter = screen.getAllByTestId("resCard");
  expect(cardsBeforeFilter.length).toBe(20);

  const topRatedBtn = screen.getByRole("button", { name: "Top Rated Restaurants" });
  const searchInput = screen.getByTestId("searchInput")
  fireEvent.click(searchInput);
  // //screen should load 3 cards
  const cardsAfterFilter = screen.getAllByTestId("resCard");
  expect(cardsAfterFilter.length).toBe(20);
  expect(topRatedBtn).toBeInTheDocument();


}); 