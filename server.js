// this is required since node.js does not understand jsx out of the box
require('@babel/register')({
    presets: ['@babel/preset-env', '@babel/preset-react']
});

require('ignore-styles'); // style processing is not required on the server

// import the required modules
const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

// import the main component to render
const App = require('./src/App').default;

// Create an express Application
const app = express();

// serves static files from the 'build' directory
app.use(express.static('build'));

// Define the route handler for the root path
app.get('/', (req, res)=>{
    const html = ReactDOMServer.renderToString(React.createElement(App));

    // define the html template
    const template = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>React App</title>
    </head>
    <body>
        <noscript> You need to enable JS to run this app</noscript>
        <div id="root">${html}</div>
    </body>
    </html>
    `;

    res.send(template);
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})