    const express = require('express');
    const app = express();
    const PORT = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

    // Middleware to parse JSON bodies
    app.use(express.json());

    // Define the POST endpoint
    app.post('/api/submit-data', (req, res) => {
	const postData = req.body;
	console.log('Received POST request with data:', postData);
    	// Process the data...
    	const responseHtml = `<h1 style="color: green;">Hello from the server!</h1><p style="color: yellow;">Your seat class is: ${postData.seatclass}</p>`;
    	res.send(responseHtml);
    });

    // Start the server
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
        console.log(`POST endpoint: http://localhost:${PORT}/api/submit-data`);
    });


