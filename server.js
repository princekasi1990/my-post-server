    const express = require('express');
    const app = express();
	const cors = require('cors');
    const PORT = 3000;
const bodyParser = require('body-parser');
app.use(cors({
      origin: 'http://localhost:5173', // Replace with your React app's origin
      methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
      allowedHeaders: ['My-Custom-Header', 'Content-Type'], // Crucial for custom headers
    }));

app.use(bodyParser.urlencoded({ extended: true }));

    // Middleware to parse JSON bodies
    app.use(express.json());

    // Define the POST endpoint
    // app.post('/api/submit-data', (req, res) => {
	// const postData = req.body;
	// console.log('Received POST request with data:', postData);
    	// Process the data...
    	// const responseHtml = `<h1 style="color: green;">Hello from the server!</h1><p style="color: yellow;">Your seat class is: ${postData.seatclass}</p><a href="https://www.united.com" target="_blank">Visit United.com</a>`;
    	// res.send(responseHtml);
    // });

app.get('/data', (req, res) => {
  const customHeader = req.headers['x-custom-header']; // Access the custom header
  console.log('Received X-Custom-Header:', customHeader);

  if (customHeader === 'your-secret-value') {
    res.status(200).json({ message: 'Header recognized!', receivedHeader: customHeader });
    // You can also send a redirect URL if needed
    // res.redirect('https://another-url.com'); 
  } else {
    res.status(401).json({ message: 'Unauthorized: Invalid custom header' });
  }
});

    // Start the server
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
        console.log(`POST endpoint: http://localhost:${PORT}/api/submit-data`);
    });







