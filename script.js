// Fungsi untuk mendapatkan cuaca dari API
async function fetchWeather() {
    const apiKey = '87f00edf3246b0ad590898c441a86be4';
    const city = 'Semarang';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.main && data.weather) {
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            document.getElementById('weather-info').innerText = `Temperature: ${temperature}°C, ${description}`;
        } else {
            throw new Error('Invalid response structure');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('weather-info').innerText = 'Weather data not available';
    }
}

// Mendapatkan cuaca saat halaman dimuat
window.onload = fetchWeather;

// Fungsi untuk mengaktifkan dark mode
document.getElementById('toggleMode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const currentMode = document.body.classList.contains('dark-mode') ? '🌙' : '☀️';
    document.getElementById('toggleMode').textContent = currentMode;
});

// Toggle Hamburger Menu
document.getElementById("hamburgerMenu").addEventListener("click", function () {
    const nav = document.getElementById("hamburgerNav");
    nav.classList.toggle("show"); // Menambahkan class 'show' untuk menampilkan menu
});
