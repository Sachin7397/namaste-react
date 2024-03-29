import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"


describe("Contact Us Page test cases", () => {

  beforeAll(()=>{
    console.log("Before All")
  })

  beforeEach(()=>{
    console.log("Before Each")
  })

  afterAll(()=>{
    console.log("after All")
  })

  afterEach(()=>{
    console.log("after Each")
  })

  it("should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("should load button inside contact us component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("should load input inside contact us component", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("name");
    expect(inputName).toBeInTheDocument();
  });

  test("should load 2 input inside contact us component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");//Quering
    expect(inputBoxes.length).toBe(2);
  });
});
