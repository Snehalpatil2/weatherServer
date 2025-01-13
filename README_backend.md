
# Weather API Backend

## Project Overview

This Weather API Backend is a Node.js-based server that fetches real-time weather data for a given city. It uses the OpenWeatherMap API to retrieve weather details and serves the data in a simplified format. The server is built using Express.js, and it supports Cross-Origin Resource Sharing (CORS) to allow requests from different domains.

### Key Features:
- Fetches weather data from the OpenWeatherMap API based on a city query.
- Returns weather details such as temperature, humidity, wind speed, and more.
- Handles errors gracefully and provides meaningful error messages.
- Supports CORS for making requests from frontend applications.

## Setup Instructions

To set up this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Snehalpatil2/weatherServer.git
   cd weatherServer
   ```

2. **Install dependencies:**
   This project requires the following Node.js packages:
   - `express`
   - `cors`
   - `node-fetch`
   - `dotenv`

   Install them by running:
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory of the project with the following content:
   ```env
   API_KEY=your_openweathermap_api_key
   PORT=3000
   ```
   Replace `your_openweathermap_api_key` with your OpenWeatherMap API key. You can obtain one by signing up on [OpenWeatherMap](https://openweathermap.org/).

4. **Run the server:**
   Start the server by running:
   ```bash
   npm start
   ```
   The server will be running on the port specified in the `.env` file (default is 3000).

5. **Test the API:**
   You can test the API by sending a `GET` request to:
   ```
   http://localhost:3000/?city=your_city_name
   ```
   Replace `your_city_name` with the name of the city you want to get weather data for.

## API Documentation

The Weather API accepts a `GET` request with a `city` query parameter and returns the weather data for that city.

### Endpoint:
```
GET /?city={city}
```

### Query Parameters:
- `city`: The name of the city for which you want to fetch the weather data.

### Response:
The API responds with a JSON object containing weather details such as:
- `temp`: Current temperature in °C.
- `weather_condition`: Description of the weather (e.g., Clear, Rainy).
- `humidity`: Humidity percentage.
- `wind_speed`: Wind speed in meters per second.
- `city`: Name of the city.
- `icon`: URL of the weather icon representing the condition.
- `min_temp`: Minimum temperature in °C.
- `max_temp`: Maximum temperature in °C.
- `feels_like`: Feels like temperature in °C.

### Example Response:
```json
{
  "success": true,
  "message": {
    "temp": 25,
    "weather_condition": "Clear",
    "humidity": 60,
    "wind_speed": 3,
    "city": "New York",
    "icon": "https://openweathermap.org/img/wn/01d.png",
    "min_temp": 20,
    "max_temp": 28,
    "feels_like": 27
  }
}
```

### Error Response:
If there is an error (e.g., city not found or API failure), the API will return a response with the following structure:
```json
{
  "success": false,
  "message": "Error message"
}
```

## Design Decisions

1. **Express.js for Server:**
   - The backend is built using Express.js for handling HTTP requests and responses. Express is lightweight and provides all necessary tools for routing and middleware support.

2. **Fetching Weather Data:**
   - The weather data is fetched using `node-fetch`, which makes it easy to perform HTTP requests from the server to the OpenWeatherMap API.

3. **Error Handling:**
   - The server handles both network and application errors. If the weather API request fails or the city is invalid, the server sends a detailed error message to the client.

4. **Environment Variables:**
   - API keys and other sensitive information are stored in environment variables using the `dotenv` package. This ensures that the API key is not exposed in the code.

## Future Improvements

1. **Geolocation Support:**
   - Implement support for fetching weather data based on the user's geographical location (latitude and longitude) instead of just the city name.

2. **Caching:**
   - Introduce caching to avoid making frequent API requests for the same city. This can reduce the load on the weather API and improve performance.

3. **Rate Limiting:**
   - Implement rate limiting to prevent abuse of the API and to ensure that the server can handle high traffic.

4. **Error Logging:**
   - Integrate error logging (e.g., using a service like Sentry or a custom logging system) to track and monitor errors in production.

5. **Unit Tests:**
   - Write unit tests for the server to ensure the reliability and correctness of the API endpoints.

## Notes About Platform Limitations

1. **API Rate Limiting:**
   - The OpenWeatherMap API has rate limits. Ensure that the application does not exceed the number of allowed requests within a given time frame.

2. **API Key Security:**
   - Keep the OpenWeatherMap API key secure. Do not expose it in the client-side code. Use server-side logic to fetch weather data.

3. **Server Limitations:**
   - The server is designed to handle a moderate amount of traffic. For heavy traffic or high availability, consider scaling the application or deploying it on a cloud service.

## Conclusion

This Weather API Backend provides a simple and efficient way to fetch weather data for any city. It is built using Node.js and Express.js, and it interacts with the OpenWeatherMap API. The server is easy to set up and extend, making it a great starting point for building weather-related applications.


### Author
- Snehal Jitendra Patil
