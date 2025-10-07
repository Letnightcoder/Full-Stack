async function getWeather() {
  const apiKey = "83c845d70f6a66aefd801c6866d19e8e";
  const city = document.getElementById("city").value;
  if (!city) {
    alert("Please enter a city name");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("City not found");
    }
    const data = await response.json();

    document.getElementById("weather").innerHTML = `
                    <h3>${data.name}, ${data.sys.country}</h3>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Weather: ${data.weather[0].description}</p>
                `;
  } catch (error) {
    document.getElementById(
      "weather"
    ).innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}
