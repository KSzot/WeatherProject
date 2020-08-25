export async function getWeather(name = 'Warszawa') {
  const data = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${process.env.API_KEY}`,
  );
  return data;
}
