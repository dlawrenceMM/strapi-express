// This function reports web vitals data to a callback function passed as an argument
const reportWebVitals = onPerfEntry => {
  // Check if the callback function is defined and is a function
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Use dynamic import to load the web-vitals library and call its functions to get the performance data
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Call each web-vital function with the onPerfEntry callback as an argument
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

// Export the reportWebVitals function for use in other parts of the application
export { reportWebVitals };
