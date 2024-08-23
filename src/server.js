import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import './globals.css';

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('*',(req, res)=>{
    const initialData = {tempreture: 25, condition: 'Sunny'};
    const appString = renderToString(React.createElement(App, {data: initialData}));

    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <link rel="stylesheet" href="/styles.css">
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Universal Weather App" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <title>Universal Weather App</title>
        <script>window.__INITIAL_DATA__ = ${JSON.stringify(initialData)}</script>
    </head>
    <body>
        <div id="root">${appString}</div>
        <script src="/bundle.js"></script>
    </body>
    </html>
  `;

  res.send(html);
});

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Server is running on <http://localhost>:${port}`)
});