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
    const maxResults = 20; // Specify the total number of reviews you want to retrieve
    const pageSize = 5; // Specify the number of reviews to fetch per page

    let nextPageToken = null;
    let allReviews = [];

    do {
      const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&fields=reviews&key=${apiKey}&maxwidth=${pageSize}${nextPageToken ? `&pagetoken=${nextPageToken}` : ''}`;

      const response = await fetch(url);
      const data = await response.json();
    
      if (data.result && data.result.reviews) {
        allReviews = allReviews.concat(data.result.reviews);
      }

      nextPageToken = data.result ? data.result.next_page_token : null;

      // Sleep for a few seconds to ensure the nextPageToken becomes valid
      if (nextPageToken) {
        await new Promise(resolve => setTimeout(resolve, 2000)); // Adjust the delay as needed
      }

      // Move this line inside the try block
    } while (nextPageToken && allReviews.length < maxResults); // Stop when you reach the desired number of reviews

    // Extract the desired number of reviews from the beginning
    const reviews = allReviews.slice(0, maxResults);

    res.json({ reviews });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while fetching reviews.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
