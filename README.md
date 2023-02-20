# XE.gr WEB DEV CHALLENGE

# Overview
This is the solution to the XE.gr Web Dev Challenge using React and ChakraUI
images of the app

# Implementation Details
## Front End
The front end solution consists of a React application served with Vite using ChakraUI as a component library.
### Notable Libraries
- react router, for page routing
- vitest, for running the unit tests with react-testing-library
- cypress, for running component tests

There are 3 pages accessible, the plain home page, a page to add a new property and a page to list all the properties.

## Back End
The back end consists of a very simple nodejs application using expressjs to servpe data.

The server is responsible for interacting with the autocomplete API and persisting the data.

### APIs Exposed
Get autocomplete suggestions
```
GET /places?input={query}
```
Get all properties from the db
```
GET /properties
```
Create new property entry
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
The library chosen is `node-persist`, which is a lightweight storage mechanism that stores each entry in the "database" as a separate file (under the ./server/persist folder). The folder is used as a single table storage

The reasons it was selected over a DB solution was:
- Simplicity of installation, just a node module, no need for user installation of a specific db (good for demo purposes)
- The data persisted are very simple, a single table, with a very simple, get all values "query", and node-persist provides a very fast and easy way to demonstrate a persistance layer without spending much time

### Caching mechanism
For the caching mechanism, `node-cache` was used, which is a simple caching mechanism, with a localstorage-like api


# Installation Options
## Docker with Docker Compose
On the main folder, just run the following command and everything will be installed during the docker image build
```
docker-compsoe up
```
## Manual Installation
For manual installation, node v14+ is required
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
## Docker with Docker Compose
Using docker compose, the following command will start both services
```
docker-compose up
```
The back end service is running on locahost:4001

The front end service is running on localhost:4000. Visit localhost:4000 to see the application

## Manual
Assuming node v14+ is installed and the installation steps are performed
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

The front end service is running on localhost:4000. Visit localhost:4000 to see the application

## Ports and enviroment variables
In case there are other services running on ports 4000 and 4001, modify the left hand side values of the ports `sections` on docker-compose.yml file. Do not forget to change the enviromental variable for the port (VITE_PROPERTIES_API_PORT) on the front end service.

With the current setup, the application is only accessible from the machine it is running on. In case you want to run the application on another device on your local network, like a phone, change the VITE_PROPERTIES_API_URL env variable in the compose file, to your local ip address

For the manual running of the applications, please change the .env.local files on each component folder.

# Testing
For the testing, vitest, react-testing-library and cypress were utilised and only for the front end application.

Every commit on the branch triggers a build and a test run against the unit tests

## Unit Testing
In order to the unit tests, run the following commands
```
cd client
npm test
```
## Component Testing
For the more complex components, like the form and the list of the persisted properties, cypress was used, mocking the api calls.

In order to run them, run the following commands
```
cd client
npm run cupress:run
```

The component tests are pretty simple and just demonstrate verify basic usage

