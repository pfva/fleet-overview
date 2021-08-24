# Fleet Overview

This is a web application for fleet owners for viewing and updating your vehicle fleet.

## How to run:

*Requirements:* node v.12 or greater and npm v.5 or greater

### 1. Clone the repo

If you're getting this from GitHub, you should clone this repo locally to your own computer. If you're getting this in a .zip file instead, skip to step 2.

Run `git clone https://github.com/pfva/fleet-owerview.git`

### 2. Install the project dependencies

Run `npm install` to get the project dependencies listed in package.json

### 3. Start the application

Run `npm start` to start up the application. It will automatically open the development server at http://localhost:3000/ on your machine

---

### Do you want to use your own data set?

You can use different vehicle data if you have the need for it. Simply replace the JSON file `/src/data/vehicles.json` with a file of your own (make sure the JSON data has a similar structure as the current one). 

If you want to change the list of different available equipments, that is possible too. Simply follow the same process as above, but for `/src/data/equipments.json`.
