# Doctor Finder

#### Web app using JavaScript, Node.js and BetterDoctor API, May 26, 2017

### By Bryan Lin

## Description

Doctor Finder is a web application that utilizes the BetterDoctor API to search for doctors in the Seattle area matching the user query. Users can search for doctors based on either doctor name and/or medical issue requiring attention. The application is built with JavaScript and Node.js, and uses data from the BetterDoctor API. Access the webpage directly from: https://bryanlin39.github.io/doctor-finder.

## Setup/Installation Requirements

* Clone the repository (https://github.com/bryanlin39/doctor-finder.git)
* Visit the BetterDoctor API site at https://developer.betterdoctor.com/
  * Click "Get a free API key" and follow the instructions to acquire an API key
* Create an .env file at the top level of the directory
  * In it, type "exports.apiKey = " + your API Key inside quotes
* Run "npm install" in the terminal to install all Node packages
* Run "bower install" in the terminal to install all Bower packages for managing the front-end
* Run "gulp build --production" in the terminal to optimize the workflow into a production build
* Run "gulp serve" in the terminal to launch the server and run the app

## Known Bugs

None

## Support and Contact Information

For any comments or concerns, please email Bryan at bryanlin39@gmail.com.

## Technologies Used

* JavaScript
* JQuery
* Node.js
  * Node package manager (npm)
  * Bower package manager
* BetterDoctor API
* HTML
* CSS
* Bootstrap

### License

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Copyright (c) 2017 Bryan Lin
