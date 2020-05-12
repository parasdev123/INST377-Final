# ReadMe

#### Title:

- Prince George's Couty Public Service

#### Description of Project:

- We are creating an interactive map that plots the location of libraries, recreation centers, fire stations, and police stations within Prince George’s (PG) county. We want to explore how these facilities are allocated in order to determine if the people of PG county have similar services and access. We want to see if there are certain neighborhoods in PG county that are underrepresented. With this tool, we hope to highlight any inconsistencies and help the county make better decisions regarding future projects.

#### Link to Heroku:

- [Link to Heroku Webpage!](https://pg-service.herokuapp.com/)

#### Description of Target Browser:

- This webpage works with Chrome, Firefox, Safari, and Edge.

#### Link to user Manuel:

- [Link to User Manuel](/docs/user.md)

#### Link to Developer Manuel:

- [Link to Developer Manuel](#developer-manuel)

# Developer Manuel

#### How to install your application and all dependencies?

- In order for the webpage to run properlly we need to install dependencies for both the frontend and backend. After the folder is installed in your computer, do a "npm install" on the main folder to download the dependencies for the backend. Then "cd client" to go into the client folder and do "npm install" to install the dependencies for the frontend.

#### How to run your application on a server

- After all the dependencies are installed, do "cd .." to go back to the main folder. Then to run the webpage type on your local machine server type "npm run dev". This starts both the server for the backend and the react scripts for the frontend, and will launch the page on port 3000/5500

#### How to run any tests you have written for your software

- We did not write any tests for our software.

#### The API for your server application - all GET, POST, PUT, etc endpoints, and what they each do

- Our backend servers uses GET, LISTEN, and FETCH in order to support the front end. We used the LISTEN request to confirm that our server is up and running and using the correct port. We have four GET request corresponding with the four different pages. Each page reprsent data from one set of the PG county such as /policeStations. Once called upon, these GET requests make a call to the respective function in order to FETCH the data from PG county, edit it to display the clean & useful information, and send the data to the front end.

#### A clear set of expectations around known bugs and a road-map for future development.

- The issue we are currently tackling is getting the server to feed the front end data in the heroku enviroment. This issue is preventing us from displaying the markers on the map for where each community resource is. 

- We were not able to figue how to work with react and mapbox to combine the four different maps in this timeframe.As such, our future goal is to combine the four datasets into one map, allowing for a better experince and our original inteded goal.