# RC Lee Hall App
#### Built by RC Tech Club

This is the repository for the web and mobile apps of RC Lee Hall of the University of Hong Kong. They are developed by the RC Tech Club to provide a one-stop platform for RC Lee students to gain all information relevant to the hall.

## How to setup development environment

## General

1.  Install [Node.js](https://nodejs.org/en/download/) LTS
2.  Install [Npm](https://www.npmjs.com/get-npm)

## Web App

1.  `cd web`
2.  `npm install`

## Server

1.  `cd server`
2.  `npm install`

## Mobile App

1.  `cd mobile`
2.  `npm install`

## How to run

### Web App

1.  `cd web`
2.  `npm start`
3.  Visit web app at [http://localhost:3000/](http://localhost:3000/)

### Mobile App

#### 1. Start Server

1.  Go to server directory `cd server`
2.  Run server `npm start dev`
3.  Open GraphQL Playground at [http://localhost:4000/graphql](http://localhost:4000/graphql)

#### 2. Start App

1.  If you don't have expo installed, install by `npm install -g expo-cli`
2.  Go to mobile directory `cd mobile`
3.  Run app `expo start`
4.  Download Expo mobile app and scan QR code to run the app

## How to deploy

### Server

1.  `git subtree push --prefix server/ [backend link] master`

### Web App

1.  Ensure you are in master branch by `git branch`
2.  Deploy by `npm deploy`
3.  Visit web app at [link]()
