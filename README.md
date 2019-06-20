# Moving to Seattle

This project displays heatmaps on a map of Seattle based on user selected categories and then suggests currently available rental properties. Users can toggle categories on or off and adjust their weight using the corresponding slider. While a category is selected any locations it contains will be displayed as a heatmap over the map of Seattle, weighted by the corresponding category's weight.

![VideoDemo](src/images/Demo-1.gif)

Upon pressing the "Where should I live?" button 10 suggested rental listings will appear. These are currently available rentals which are located in the densest regions based on the categories currently selected.

![VideoDemo](src/images/Demo-2-short.gif)

Video demo: https://www.youtube.com/watch?v=U1AQ696BLOk

## Setting Up The Frontend

- Install the neccessary dependencies

```
npm install
```

- Start the MovingtoSeattle backend server (see the instructions at https://github.com/CritJen/MovingToSeattle-BackEnd for more info)

- Start your local server

```
npm start
```

- If the MovingtoSeattle backend server is already running on the default port 3000 you will see a message that something is already running on that port. Select yes (y) to run the app on port 3001 instead.

- Visit the address in the development server output, by default http://localhost:3001, to intertact with the web app.

### Built With

[React](https://reactjs.org/) - The web framework used\
[Redux](https://redux.js.org/) - Application state store\
[NPM](https://www.npmjs.com/) - Dependency Management

### Author

Jennifer Clark
