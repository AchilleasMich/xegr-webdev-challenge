# XE.gr WEB DEV CHALLENGE

# Overview
This is the solution to the XE.gr Web Dev Challenge using React with Vite and ChakraUI

# Implementation Details
## Front End
The front end solution consists of a React application served with Vite using ChakraUI as a component library
### Notable Libraries
- [ChakraUI](https://chakra-ui.com/), as component library
- [react-router](https://v5.reactrouter.com/), for page routing
- [vitest](https://vitest.dev/), for running the unit tests with [react-testing-library](https://github.com/testing-library/react-testing-library)

There are 3 pages accessible, the plain home page, a page to add a new property and a page to list all the properties.

## Back End
The back end consists of a very simple nodejs web application using [expressjs](https://expressjs.com/)

The server is responsible for interacting with the autocomplete API and persisting the data.

### APIs Exposed
- Get autocomplete suggestions
```
GET /places?input={query}
```
- Get all properties from the db
```
GET /properties
```
- Create new property entry
```
POST /property
{
  title: string,
  area; {
    placeId: string,
    mainText: string,
    secondaryText: string
  },
  type: string,
  price: string,
}
```

### Data persistance
For the data persistance, a very simple solution was selected.

The library chosen is [`node-persist`](https://github.com/simonlast/node-persist), which is a lightweight storage mechanism that stores each entry as a separate file. The folder used in this project is `./server/persist` and it acts as a single table storage mechanism

The reasons it was selected over a DB solution was:
- Simplicity of installation, just a node module, no need for user installation of a specific db (good for demo purposes)
- The data persisted are very simple, a single table, with a very simple, get all values "query", and `node-persist` provides a very fast and easy way to demonstrate a persistance layer without spending much time

### Caching mechanism
For the caching mechanism, [`node-cache`](https://github.com/node-cache/node-cache) is used, which is a simple caching mechanism, with a localstorage-like api


# Installation Options
## Docker Solution

*Prerequisites: Docker and Docker Compose need to be installed (installation depends on the platform)

On the root project folder, when the following command is run for the first time, new docker images are going to be build, containing all the required installation packages
```
docker-compose up
```
## Manual Installation
For manual installation, `node v14+` is required
### For the server component
```
cd server/
npm install
```

### For the client component
```
cd client/
npm install
```

# Running the application
## Docker Solution
Using docker compose, the following command will start both services
```
docker-compose up
```
The back end service is running on `locahost:4001`

The front end service is running on `localhost:4000`. Visit [localhost:4000](localhost:4000) to interact with the application

## Manual Run
Assuming node v14+ is installed and the installation steps have already been performed performed
### Front end
```
cd client
npm run dev
```
### Back End
```
cd server
node index.js
```
The back end service is running on locahost:4001

The front end service is running on `localhost:4000`. Visit [localhost:4000](localhost:4000) to interact with the application

## Ports and enviroment variables
In case there are other services running on ports 4000 and 4001 on your local machine, modify the left hand side values of the `ports` sections on `docker-compose.yml` file. Do not forget to change the enviromental variable for the port (`VITE_PROPERTIES_API_PORT`) on the front end service accordingly.

With the current setup, the application is only accessible from the machine it is running on. In case you want to run the application on another device on your local network, like a phone, change the `VITE_PROPERTIES_API_URL` env variable in the compose file, to your local ip address

For the manual running of the applications, please change the `.env.local` files on each component folder

# Testing
For the testing, `vitest`, `react-testing-library` and `cypress` were utilised and only for the front end application.

## Unit Testing
In order to run the front end unit tests, run the following commands
```
cd client
npm test
```
## Component Testing
For the more complex components, like the form and the list of the persisted properties, cypress was used.

In order to run them, run the following commands
```
cd client
npm run cupress:run
```

The component tests are pretty simple and just verify very basic usage


