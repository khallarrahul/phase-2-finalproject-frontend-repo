# phase-2-finalproject-frontend-repo

## The EventMaster App
This is a web application that lets people know about live events happening around in The United States of America using api from ticketmaster and also let people post their own organised events in another section.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Features
- This is a CRUD application.
- Timely events updation of current events going on
- Filter events by their genre from a long list of rendered events
- User-friendly and interactive interface with two separate containers for official events and personal events
- The routing among both those containers is done using React-Router.
- All official events are displayed in cards with a button that copies the link of official page of ticketmaster to you clipboard,making it supereasy to find your relevant event.
- All the buttons consists of hover effect making it visually appealing.
- Personal events consists of controlled form where you can submit your own event with an image.
- Each personal event card also keep a track of attendance of poeple coming to event.
- The filter function is dynamic, that means it automatically updates the genre based on the events posted in both the containers and also keeps a check of which event is deleted hence also removes that genre.

## Technologies Used
- HTML,CSS, Javascript and ReactJS ere used to create the UI.
- ticketmaster api used to render events.
- Render.com used to deploy my db.json that stores the data from Personal events.

## Render.com free tier
-The db.json for personal events is deployed using render.com using its free tier service. Due to that, the data does not persists for longer duration and returns back to that data which I have git pushed onto my backend repo. 
Here is the link to my backend: https://github.com/khallarrahul/json-server-template

## Getting started
- Clone the repository phase-2-finalproject-frontend-repo
- npm install the node modules packages
- In your terminal, type command: npm start
- Once the application is loaded, you would be routed to events containers, you can filter those events or just scroll down looking for your favorite events.

## Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
