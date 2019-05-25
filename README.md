This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## MVP Project Description

- The essential idea is "Where is it nice that I can drive to?"
- This project provides a way for Seattle residents to look up destinations within driving distance that meet user provided parameters for weather
- The MVP will be for Seattle only
- It will receive input from the user on desired weather. To start, a temperature range only, then other factors like rain or cloud cover
- It will also receive input from user on how far they are willing to drive.
- The application will search a weather API for locations within that geographical range, and return a list of the locations that fit the user entered weather criterea

## Further development

- I'd like to return a list of seasonally appropriate activities for the locations that fit the user's criterea.
- Also return information about lodging in those locations -- a few hotels or AirBnBs
- Eventually I'd like to be able to have the user enter their location, and then dynamically create a list of destinations nearby that meet critera, rather than having this information hard coded
- There could be a user sign in that allows the user to save frequent searches, and also might qualify them for discounts to activities or lodging
- If no desinations match the user provided critera, the app could return information on destinations reachable by flight that match the weather critera, and list flight information

## Available Scripts

In the project directory, you can run:

### `npm install`

then

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
