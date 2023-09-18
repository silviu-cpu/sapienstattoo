const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();
const port = 3000; // Choose a port for your server

app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));
// Define a route for handling requests to fetch Google Reviews
app.get('/fetch-google-reviews', async (req, res) => {
  try {
    // Replace 'YOUR_API_KEY' with your Google Places API key
    const apiKey = 'AIzaSyDr-UGuX9RHqihJU2-SNJf99AkhEft2Vxk';
    const placeId = 'ChIJdU-qlBX_sUARwmkKQFWYVgQ'; 

    const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&fields=reviews&key=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while fetching reviews.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
