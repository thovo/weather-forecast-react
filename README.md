# Introduction

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). This project used Places API and Open Weather API to make a 5 days forecast weather for a specific city.

## API Preparation

For this project to work normally, you need to modify the file `.env.sample` to `.env` and copy your API keys for Open Weather API and Places API.

### Places API registration

Places API is used to display autocomplete function, to run this app you need to replace `YOUR_API_KEY` in `REACT_APP_PLACES_API=YOUR_API_KEY`

To register your API key, please follow the instruction [here](https://developers.google.com/places/web-service/get-api-key)

### Open Weather API registration

Open Weather API is used to have forecast data for 5 days based on the location (latitude and longtitude) we give it.

Steps to get the API:
- Register an account [here](https://home.openweathermap.org/users/sign_up)
- Verfiy your account with your email and login [here](https://home.openweathermap.org/users/sign_in)
- Access your list of API keys [here](https://home.openweathermap.org/api_keys)
- Create a new API key to use for this project
- Copy your API key and replace `YOUR_API_KEY` in `REACT_APP_OPEN_WEATHER_API_KEY=YOUR_API_KEY` in `.env`
- Your API will take about 15 minutes to 2 hours to be active so be patient

## Limitations

- This project should use a Back End server to provide another layer to access to these API we are using. So you don't need to public your API keys.
- `.env` is already put in `.gitignore` but please be careful to not publish your API keys when you do commit and push.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

