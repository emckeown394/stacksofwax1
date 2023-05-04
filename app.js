const express = require("express");
let app = express();
const path = require("path");
const connection = require("./connection.js");

//middleware
app.use(express.static(path.join(__dirname,'./public')));
app.set('view engine', 'ejs');

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

//server
app.listen(process.env.PORT || 3000);
console.log(" Server is listening on //localhost:3000/ ");