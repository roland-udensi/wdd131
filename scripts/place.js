// Footer year and last modified
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Wind Chill - static values
const temp = 10; // °C
const wind = 5; // km/h

function calculateWindChill(t, w) {
    return (13.12 + 0.6215 * t - 11.37 * Math.pow(w, 0.16) + 0.3965 * t * Math.pow(w, 0.16)).toFixed(1);
}

let chill = "N/A";
if (temp <= 10 && wind > 4.8) {
    chill = calculateWindChill(temp, wind) + " °C";
}
document.getElementById("windchill").textContent = chill;