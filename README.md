# phase-2-finalproject-frontend-repo

## Deployed link: https://theeventmaster-by-rahul-khallar.netlify.app/

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
- Netlify.com used to deploy my frontend

## Render.com free tier

-The db.json for personal events is deployed using render.com using its free tier service. Due to that, the data does not persists for longer duration and returns back to that data which I have git pushed onto my backend repo.
Here is the link to my backend: https://github.com/khallarrahul/json-server-template

## Getting started

- Clone the repository phase-2-finalproject-frontend-repo
- npm install the node modules packages
- In your terminal, type command: npm start
- Once the application is loaded, you would be routed to events containers, you can filter those events or just scroll down looking for your favorite events.
- You can click on personal events and try posting your own event, patching some attendance and deleting that event.
- You dont have to start the backend server, since its already deployed
- This app is also deployed and here is the link: https://theeventmaster-by-rahul-khallar.netlify.app/

## Acknowledgments

This project was created as a learning exercise, and it would not have been possible without the resources and support of the following:
-Flatiron School community - teachers and fellow students
-The web development community on Stack Overflow and MDN Web Docs for providing helpful resources and insights
-Tickermaster api

## License

This project is licensed under MIT license. Copyright (c) 2012-2023 Scott Chacon and others

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
