import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import App from "./App";
import ColorSelector from "./components/ColorSelector";
import Paginator from "./components/Paginator";
import UserList from "./components/UserList";

it("renders the page and general tests", () => {
  render(<App />);
  const headingElement = screen.getByText(/My Clerks App/i);
  expect(headingElement).toBeInTheDocument();

  //Test if the app is fetching the data and is in loading state
  const loadingState = screen.getByText(/Fetching people data.../i);
  expect(loadingState).toBeInTheDocument();

  //Test if the Previous page button is disabled since we are fetching the first page results
  const firstButton = screen.getByRole("button", { name: "Previous Page" });
  expect(firstButton).toBeDisabled();
});

it("expect paginator buttons to be rendered", () => {
  render(<Paginator />);

  //Test if there are 2 buttons in the Paginator component
  const buttons = screen.getAllByRole("button").length;
  expect(buttons).toEqual(2);
});

it("expect User List to always contain and render 3 User Cards", () => {
  //I am not sure about this test, since a lot of the resources on the internet would implement this in different ways

  const mockPeopleData = [
    {
      id: 1,
      name: "Geor",
      picture: {
        large:
          "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&w=1000&q=80",
      },
      email: "Geo@hotmail.com",
      location: {
        city: "Roma",
        state: "Italy",
      },
    },
    {
      id: 1,
      name: "Geor",
      picture: {
        large:
          "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&w=1000&q=80",
      },
      email: "Geo@hotmail.com",
      location: {
        city: "Roma",
        state: "Italy",
      },
    },
    {
      id: 1,
      name: "Geor",
      picture: {
        large:
          "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&w=1000&q=80",
      },
      email: "Geo@hotmail.com",
      location: {
        city: "Roma",
        state: "Italy",
      },
    },
  ];

  render(
    <>
      <App />
      <UserList people={mockPeopleData} />
    </>
  );

  const userCards = screen.getAllByTestId("user-card");
  expect(userCards.length).toBe(3);
});

it("expect color picker to be visible when color button is clicked", () => {
  render(<ColorSelector />);

  const colorButton = screen.getByRole("button");
  fireEvent.click(colorButton);

  expect(screen.getByTestId("color-picker")).toBeInTheDocument();
});
