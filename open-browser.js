const { exec } = require('child_process');

// Replace this URL with the specific URL you want to open
const urlToOpen = 'http://localhost:3000/home';

// Function to open the URL in the default web browser
const openBrowser = (url) => {
  const command = process.platform === 'win32' ? 'start' : process.platform === 'darwin' ? 'open' : 'xdg-open';
  exec(`${command} ${url}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error opening the web browser: ${error.message}`);
    }
  });
};

// Call the function to open the URL
openBrowser(urlToOpen);
