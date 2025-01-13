const express = require('express');
const cors = require("cors");
const fetch = require("node-fetch"); // Ensure this is installed via npm
require('dotenv').config(); // To use environment variables

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());


app.get('/', async (req, res) => {
    const city = req.query.city; 
    const API_KEY = process.env.API_KEY;

    try {
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&sunrise=standard`;
        const response = await fetch(URL);
        const data = await response.json();

        if (!response.ok) {
            return res.status(response.status).send({
                success: false,
                message: data.message
            });
        }


        res.status(200).send({
            success: true,
            message: {
                "temp": data.main.temp,
                "min_temp": data.main.temp_min,
                "max_temp": data.main.temp_max,
                "feels_like": data.main.feels_like,
                "weather_condition": data.weather[0].description,
                "humidity": data.main.humidity,
                "wind_speed": data.wind.speed,
                "city": data.name,
                "icon": `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
            },
        });
    } catch (error) {
        console.error('Server Error:', error);
        res.status(500).send({
            message: "Internal server error. Please try again later.",
        });
    }
});



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
