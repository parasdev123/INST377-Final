# Final Report

#### Title

- Prince George's Couty Public Service

#### Team members

- Paras Devkota
- Eltayeb Abdelrahman
- Kehinde Akinnuoye
- TianYi Li
- Eymen Yagar


#### Link to where your app is running

- [Link to Heroku Webpage!](https://pg-service.herokuapp.com/)

#### Information problem you're trying to solve

- We observe that in our own communities that there may be an unequal distribution in public services which of course limits access for many people. 

#### Identified stakeholders/target browsers

- Our stakeholder is the PG County Officials who will need to make changes in their services if needed. Since the data is about PG county we located all thier public services and if they are not evenly distributed our stakeholders can make a change and improve it for the citizens of PG county.

#### Data you chose to work with

- Dataset to use:
  - Map of Recreation Centers [Link to Data](https://data.princegeorgescountymd.gov/Community/Recreation-Centers/gwq4-iu9d)
  - Map of Prince George's County Libraries Education [Link to Data](https://data.princegeorgescountymd.gov/Education/Libraries/7k64-tdwr)
  - Map of County Police Stations [Link to Data](https://data.princegeorgescountymd.gov/Public-Safety/Map-of-County-Police-Stations/4abv-afw7)
  - Map of County Fire Stations [Link to Data](https://data.princegeorgescountymd.gov/Public-Safety/Map-Of-County-Fire-Stations/hnpv-i4z2)

#### Chosen strategies and solutions for the problem

- we build an interactive map that utilizes the locations of libraries, recreation centers, fire stations, and police stations within Prince George’s (PG) county. 

#### Technical system decision rationale

- We used react mapbox gl library to host a proper map and add the correct location markers effectively addressing the problem our system was meant to highlight. We also used the semantic Ui/react bootstrap library to create a good looking front-end user interface. 

#### How/if your final system helps to address the problem
- The main problem we sought out to solve/highlight was the inconsistent allocation of facilities within PG county and we believe our system does just that. With our interactive map users are able to see the areas in which necessary facilities like police stations and fire stations are concentrated and where they are not. Users are able to see exactly where these facilities are at any given time which can greatly help with allocation,e.g., postioning recreation centers near K-12 schools or having libraries positoned close to college campuses. 

#### Challenges faced and impact on final design

- One challange we faced was that when we deployed the webpage on heroku it created some problems. When the webpage was live it would not display any markers on the map. It was having trouble fetching data from the back end, and would cause the map display to break down. Through hard work, sweat, tears, and blood we were able to fix this issue! what the hell - Prof. Alex and Stack Overflow.
- Another challange is that we wanted to hear from any of the people that used the website, and wanted to get insight form them. So, we had a contact us page set up, the user could enter their info and send any message to us. The problem we faced is that we had troube sending the message to an email server.

#### Possible future work directions with this problem

- One possible future work is incorparating this state wide and observing services at a state level and see the differences between counties.
- Another future work could be to implement a way for the user to locate the closest service to thier location. As the user inputes their location, the application would fetch out the closest, police station, fire station, libraries, and rec centers. This way each user will know how far each public service is from thier location.
