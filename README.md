## M2M - Exam 

#### Project :memo: 
This years exam of the course Machine to Machine communcation was about biometric. The exam was about creating a embedded solution for a company that was monotoring people while they were watching a tv pilot show. We had to use a heart monitor sensor (Max30102) to monitor the viewers bpm and then display this data and also saving it for Data Science purpose. This years assignment was pretty much open for us to solve. I decided to solve this exam with creating a webpage that could display live data of temprature, movement and bpm. Using MQTT protocol I transfered data from the embedded solution to my webpage. 

This project is created with following programming languages/frameworks/protocols/database
- Node.JS
- React.JS
- Redux
- MongoDB
- MQTT protocol
---
#### Libraries :books: 
Main libraries that has been used in this project.
- Mqtt.js
- Socketio
- react-chartjs-2
- react-sparklines
- Express

---
#### Cloud platforms :cloud:
- MLab
- Heroku

---
#### How to start the project?
- First thing we need to do is to download all of the packages/libaries we need in our Server and Client. 
Please open up your terminal and direct in to the project folder. and then write the following: 
```
npm install
```
Procede to the Client folder and do the same thing there aswell

- When you have now downloaded the packages for the client and the server. You will have to now start the program. Write the following command in your terminal to start both Server and Client at the same time. 

```
npm run dev
```

Now you should be able to start the probject and now interact with the page. 

#### Ports 
- Server, Nodejs is running on port **5000**
- Client, Reactjs is running on port **8080**

Changing the port on the Client is not a problem. You can easily do this through the package.json in Client folder. and change the start script to the port of your choice. 

Changing the port Server is little bit more complex. Follow these steps and you have changed the port. 

- Server.js start listening on port of your choice
- Go to package.json in Client folder and change the proxy object to the
  localhost:PORTOFYOURCHOICE
  
  
  
  
