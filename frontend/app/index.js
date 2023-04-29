// Import React and ReactDOM to render the application
import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';

// Import the main SCSS stylesheet
import './styles/index.scss';

// Import the reportWebVitals function to track web vitals data
import { reportWebVitals } from './reportWebVitals.js';

// Import the main application component
import App from './app.js';

// Get the root element where the application will be rendered
const container = document.getElementById('root');

// Use ReactDOM to hydrate the application into the container element
ReactDOM.hydrate(
  <React.StrictMode>
     <App />
  </React.StrictMode>,
  container
);

// Use the reportWebVitals function to track web vitals data and log it to the console
reportWebVitals(console.log);