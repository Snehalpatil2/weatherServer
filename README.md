
# Weather API Server

This project is a Node.js server that fetches weather data using the OpenWeatherMap API and provides it to clients. The server uses Express.js and supports CORS, allowing easy integration with frontend applications.

## Features
- Fetch current weather data for a specified city.
- Returns temperature, humidity, wind speed, and weather conditions.
- Default city is Pune if no city is specified.
- Supports metric units for temperature.

## Prerequisites
- Node.js (v14 or higher recommended)
- npm (Node Package Manager)

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/Snehalpatil2/weatherServer
   ```
2. Navigate to the project directory:
   ```bash
   cd weatherServer
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root directory and add your OpenWeatherMap API key:
   ```env
   API_KEY=your_openweathermap_api_key
   ```

## Usage

1. Start the server:
   ```bash
   node server.js
   ```
2. The server will run on `http://localhost:4000` by default.

3. To fetch weather data, send a GET request to the endpoint:
   ```
   http://localhost:4000/?city=<city-name>
   ```
   Replace `<city-name>` with the name of the desired city. 

## API Response
The API returns the following data in JSON format:

```json
{
  "success": true,
  "message": {
    "temp": 25.6,
    "min_temp": 24.1,
    "max_temp": 27.0,
    "feels_like": 26.3,
    "weather_condition": "clear sky",
    "humidity": 60,
    "wind_speed": 5.4,
    "city": "Pune",
    "icon": "https://openweathermap.org/img/wn/01d.png"
  }
}
```

### Error Handling
- If the city is not found or an invalid API key is used, the API responds with:
  ```json
  {
    "success": false,
    "message": "city not found"
  }
  ```

- For internal server errors, the API responds with:
  ```json
  {
    "message": "Internal server error. Please try again later."
  }
  ```

## Dependencies
- `express`: Web framework for Node.js.
- `cors`: Middleware to enable Cross-Origin Resource Sharing.
- `node-fetch`: To make HTTP requests.
- `dotenv`: To manage environment variables.


## Acknowledgments
- [OpenWeatherMap API](https://openweathermap.org/api)
- [Express.js Documentation](https://expressjs.com/)

##Author
- Snehal Jitendra Patil
