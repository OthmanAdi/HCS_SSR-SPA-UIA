import React from "react";
import { hydrateRoot } from "react-dom/client"; 
import App from './App';
import './globals.css';

// it uses hydrateRoot instead of render, whic his the key for taking over server-side rendered content
hydrateRoot(
    document.getElementById('root'),
    // Passing window. intial data which was populated by the server
    <App data={window.__INITIAL_DATA__}/>
)