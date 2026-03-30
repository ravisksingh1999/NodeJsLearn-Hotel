// ------ Class - 5,6 Express Router, CRUD API----------------------------
const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());//req.body ke andar body parser client ke dware send data ko save kar le raha hai

app.get('/', (req, res) => {
  res.send('Welcome to our Hotel');
})
//Import the router files
const personRoutes = require('./routes/personRoutes.js')
const menuItemRoutes = require('./routes/menuItemRoutes.js');

//Use the routers
app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ` + `${PORT}`); 
})

//----------Class-4 Express---------------------------------------------
// const express = require('express');
// const app = express();
// const db = require('./db');

// const bodyParser = require('body-parser');
// app.use(bodyParser.json());//req.body ke andar body parser client ke dware send data ko save kar le raha hai

// const Person = require('./models/Person');
// const MenuItem = require('./MenuItem');

 //postPerson
// const postPerson = async (req, res) => { 
 
//   try {
//     const data = req.body // Assuming the request body contains the person data
     
     //Create a new Person document using the Mongoose model
//     const newPerson = new Person(data);
    
     //Save the new person to the database
//     const response = await newPerson.save();
//     console.log('data saved');
//     res.status(200).json(response);

//   }
//   catch (err) {
//     console.log(err);
//     res.status(500).json({ error: 'Internal Server error' });
//   }

// };
 //getPerson
// const getPerson = async (req, res) => {
//   try {
//     const data = await Person.find();
//     console.log('data fetched successfully');
//     res.status(200).json(data);
//   }
//   catch (err) {
//     console.log(err);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };
 //postMenu
// const postMenu = async (req, res) => {
//   try {
//     const data = req.body;
//     const newMenu = new MenuItem(data);
//     const response = await newMenu.save();

//     console.log('menu data saved');
//     res.status(200).json(response); 
//   }
//   catch (err) {
//     consolel.log(err);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// }
//getMenu
// const getMenu = async (req, res) => {
//   try {
//     const data = await MenuItem.find();
//     console.log('data fetched');
//     res.status(200).json(data);
//   }
//   catch (err) {
//     console.log(err);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// }

// app.post('/person', postPerson);
// app.get('/person', getPerson);
// app.post('/menu', postMenu);
// app.get('/menu', getMenu);

// app.get('/', (req, res) => {
//   res.send('Hello world from home page');
// })

// app.listen(3000, () => {
//   console.log('Server is running on port 3000'); 
// })

// ----------Class 3---------------------------------------------
// Create server using Express
// const express = require('express');
// const app = express();

// app.get('/', function (req, res) {
//   res.send('Hello world from home page');
// })
// app.get('/idly', (req, res) => {
//   const idlyItem = {
//     'idly': "4 pieces",
//     'sambar' : '1cup'

//   }
//   res(idlyItem);
// })

// app.listen(3000, () => {
//   console.log("server is running on port 3000");
// });


//-----------Class-2--------------------------------------------
// --------Built-in modules ka kya?

// Jaise:

// fs
// os
// path
// http

// Ye Node.js ke built-in/core modules hain.
// Inka code tumhare project ke node_modules folder me nahi hota.
// let fs = require('fs');
// let os = require('os');
// var _ = require('lodash');

//user details provide karta hai
// let user = os.userInfo();
// console.log(user);
// console.log(user.username);

// fs.appendFile('greet.txt', 'Hello' + user.username +' \n ', () => {console.log("file created successfully")});
  
// importing file
// const notes = require('./notes.js');
// console.log(notes.age);
// console.log(notes.add(3, 4));

// lodash library
// var data = ['person', 'person', 1, 1, 2, 2, 3, , 3];
// var filterdata = _.uniq(data);
// console.log(filterdata);


//---------Class-1---------------------------------------------
//--------Functions--------------------------------------------

// console.log("server file is running.");

//1----- normal function
// function add(a, b) {
//   return a + b;
// }
// let result = add(7, 3);
// console.log(result);

// 2-----function expression 
// let add = function (a, b) {
//   return a + b;
// }
// console.log(add(3, 5));

// 3-----named function expression 
// let add = function addition(a, b) {
//   return a + b;
// }
// console.log(add(3, 5));

// 4.----- arrow function
// let add = (a, b) => a + b;
// console.log(add(3, 4));

//5.------immediately invoked function
// (function(){
//   console.log("ravi immediately invoked function");
// })();

//6.------callback function( funtion that is passed in other function as parameter)
// function that is called latter by other function
// function processor(callback,a,b) {
//      console.log("you are in processor after complete call callback function.")
//   callback(a, b);
// }
// processor(callback,4,5);
// function callback(a, b) { console.log("sum of a and b is " + (a + b)) };
// processor(() => console.log("Processor method has been successfully completed."));

//---------------------------------------------------------------------------------------------------------------------



