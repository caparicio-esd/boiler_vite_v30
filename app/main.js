import '../assets/sass/main.scss'






const lonLat = {
    lon: 34.2, 
    lat: 43.2
}


const bodyEvents = () => {
    document.body.addEventListener("click", () => {
        fetchData(lonLat);
    });
}

const fetchData = async (lonLat) => {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lonLat.lat}&lon=${lonLat.lat}&appid=b92eb8a2e5fe79e7ea0cfcf4ebb3d1b8&units=metric`).then(d => d.json()).then(d => d);
    console.log(data)
}

bodyEvents();