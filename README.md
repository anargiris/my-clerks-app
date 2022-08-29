# My Clerks Project README

- ## Project overview

  Starting this project, I decided to use React as I am confident building apps with it and I enjoy it more than other solutions/frameworks. I also included Tailwind in this project because it makes CSS better and easier. I didn't use any other libraries because I wanted to build this project with the "default" tools and make it less complicated to inspect(e.g I could have used axios for the HTTP requests but opted for the fetch API).

  I use Prettier as a code formatter.

  To run this project, use the "npm start" command in your node terminal.

- ## Project structure and architecture

  I used App.js as the component that holds the fetch requests and most of the app state(loading, error and card's color). I am using the useEffect hook to check when the current page index changes, then I make a new request to the API for the new data. The "seed" parameter on the API url makes sure that the results for each page are the same instead of generating random results everytime the API is called. Everytime a request to the API is successful I populate the "people" state with the new results which are then passed down to the UserList component.

  I created a separate component for each of the different functionalities of the app(displaying the user profiles, changing the background color of their cards, pagination). I pass the state down from the App component to the children components. I think it's acceptable that "cardColor" is passed down 2 levels (App -> UserList -> UserCard) and is not considered prop drilling.

  One of the patterns I always use is to create parent/child components for when I need to display different data of the same nature which in this case is the UserList that renders a UserCard component for each diffent item on the "people" array.

- ## Coding best practises

  On line 57 of the App.js file I check whether the "people" array has 0 length which happens the first time the app is rendered, so I show a message to the user to let him know that the app is fetching the data. If we get an error message from the API we enter the error state and a different message and button is shown to the user. I think it's debatable if the "people" array should be emptied when we get an error message. I choose to not empty the array, but I guess it all comes down the project manager desicions in real life examples. Should be an easy fix either way.

  The Paginator component renders the buttons that increment and decrement the page number. The buttons are disabled when the app is in a loading state to avoid any mismatch of the data or making the app look like it doesn't work properly(technically it works but it is a bad UX). The API doesn't indicate the total amount of profiles or the last page so I just disabled the "Next Page" button at page 10 just for testing purposes.

  I opted to go for the simplest solution when it comes to the logic of the app which in this case is to have the "getPeople" function on the App component. There's a lot of different ways to handle this and I guess it depends on the app size. If the getPeople function would be used by a lot of different components (along with others of the same nature), my go-to solution is to build a custom reusable hook(e.g useUsers). Another way is to store the reusable function in a file(e.g utils.js) and import each function in the component that uses it.

  The ColorSelector components handles the user's ability to change the background color of the profiles. I put the different colors(using Tailwind's coloring conventions) in an array which I loop over to render each different button. I save the color changes in React state and also in local storage. If the page is refreshed, the color choice is persisted.

  I am using performance best practises when it comes to avoiding useless rerenders and the component's logic is decoupled. There was no need to use performance optimisation hooks such as useMemo and useCallback.

- ## Testing

  This was actually the first time I did testing in an app so it was kinda tricky at the start. I used online resources to get me started and tried to follow along on this app. I am not sure about the "mockPeopleData" I use(line 32 in App.test.js file). I've seen a lot of different approaches on the internet and opted to go with this one.

    I'd love to know if the testing I implemented on this app is acceptable and for the improvements that can be made.
