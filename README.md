# React Weather App

This is a simple weather feature that uses [Open Weather's One Call API](https://openweathermap.org/api/one-call-api).

## Installing dependencies - Server Side

First, we'll need to install dependencies for the `/server` directory:

1. Go to the `server` directory. `cd server`
2. `npm install` to install all necessary dependencies.

## Installing dependencies - Client Side

Then you'll neeed to install `/client` directory dependencies:

1. Go to `/client` directory. `cd .. && cd client`
2. `yarn` to install all necessary dependencies.

## Starting the application

You'll notice that inside the `/server` dependencies, there is a package called [Concurrently](https://www.npmjs.com/package/concurrently). This package is useful for CORS applications, since it provides a unique terminal where you can run your server and client side simultaneously, having visibility from both sides of the application at one. That is why we needed to install both dependencies before starting. Now we have that:

1. If you're not already, go to the `/server` directory and run `npm run dev`. This will trigger the concurrently module and setup a terminal with both front and back applications running.

## About the stack

This project was developed by using Node.js, React.js and Styled Components.

- I've been using Styled Components for a while now and the more I do, the more I like it. Being able to create styled components directly instead of using SASS or even CSS over HTML tags filled with classes and ids is cleaner and more effective. It also helps debugging styles better, make UI structures faster, focusing more on the outcome than the process itself, and the scoping mindset that it provides follows React's arquitecture directly.

- Given the size of this application I did not use any managing state library such as Redux or Context API. I decided to stick with `useState` hook in a functional component approach.

## Use cases

As a user, I want to:

- Be able to get my current location and weather information based on it.
- Select another weather location from the pre-listed ones.

## To-do list

- Add tests for mocking the data.
- Add i18n to handle texts and possible translations.

Made by [Ayelen Guini](https://www.linkedin.com/in/ayelenmarie/) with 💛  and 😸!
