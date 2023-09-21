async function fetchData(cityName) {
  const url =
    `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=  ${cityName}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "7548729b93mshfa6eebc0e34e3c9p11efd3jsnec4bc2ec0a57",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);

    // Update the HTML elements with the weather data
    document.getElementById("cloud_pct").textContent = result.cloud_pct;
    document.getElementById("temp").textContent = result.temp;
    document.getElementById("temp2").textContent = result.temp;
    document.getElementById("feels_like").textContent = result.feels_like;
    document.getElementById("humidity").textContent = result.humidity;
    document.getElementById("humidity2").textContent = result.humidity;
    document.getElementById("min_temp").textContent = result.min_temp;
    document.getElementById("max_temp").textContent = result.max_temp;
    document.getElementById("wind_speed").textContent = result.wind_speed;
    document.getElementById("wind_speed2").textContent = result.wind_speed;
    document.getElementById("wind_degrees").textContent = result.wind_degrees;
    document.getElementById("sunrise").textContent = result.sunrise;
    document.getElementById("sunset").textContent = result.sunset;
  } catch (error) {
    console.error(error);
  }
}

// Add an event listener to the form submit button
document.getElementById("submit").addEventListener("click", async (e) => {
  e.preventDefault();
  const cityInput = document.getElementById("city"); // Get the input element
  const cityName = cityInput.value; // Get the value from the input
  document.getElementById("cityName").textContent = cityName; // Set the cityName in the span element
  await fetchData(cityName); // Fetch and display weather data for the entered city
});

// Fetch data for the default city (Nagpur) when the page loads
fetchData("Nagpur");

