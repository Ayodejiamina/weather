// fetch(`https://api.openweathermap.org/data/2.5/weather?q= lagos&appid=ba341f72f7d3b1d0cf1ba4f6d847de34`)
//     .then(res=> res.json())
//     .then((data)=>{
//         console.log(data)
        
//     })
// https://source.unsplash.com/1600x900/? + name
    // <https://api.unsplash.com/search/collections?page=1&query=office
//PMrpNfI9pGnbDn__VyRMVR5e2YsLDaQ6cgrThithZgs





function submitMe(){
    let weather = document.getElementById('weather')
    let cent = document.getElementById('cent')
    let bac1 = document.getElementById('bac1')

    let input = document.getElementById('inps').value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=ba341f72f7d3b1d0cf1ba4f6d847de34`)
    .then(res=> res.json())
    .then((data)=>{
        console.log(data)
        let empty = ""
        if(data.weather[0].main == "Rain"){
            let temperate =Math.floor( data.main.temp - 273)

         empty = 
            `
            <div class="mage"><img src="images/IMG-20230911-WA0014-removebg-preview.png" alt=""></div>
            <h2 class="mb-3" id="temp">${temperate}<sup>o</sup>C</h2>
             <p class="my-3 ps" id="type">(${data.weather[0].description})</p>
             <h4 id="name">${data.name}</h4>
             <div class="d-flex justify-content-around">
             <strong class="my-3" id="pres"><i class="fas fa-wind"></i> Pressure:${data.main.pressure}mmhg</strong> 
              <strong id="hum"><i class="fas fa-temperature-high"></i> Humidity: ${data.main.humidity}%</strong>
           </div>
             `
             weather.innerHTML = empty
             bac1.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + input + "')"
          }
          else if(data.weather[0].main == "Clear"){
            let temperate =Math.floor( data.main.temp - 273)
            empty = 
            `
            <div class="mage"><img src="images/IMG-20230911-WA0008-removebg-preview.png" alt=""></div>
             <h2 class="mb-3" id="temp">${temperate}<sup>o</sup>C</h2>
             <p class="my-3 ps" id="type">(${data.weather[0].description})</p>
             <h4 id="name">${data.name}</h4>
             <div class="d-flex justify-content-around">
                  <strong class="my-3" id="pres"><i class="fas fa-wind"></i> Pressure:${data.main.pressure}mmhg</strong> 
                   <strong id="hum"><i class="fas fa-temperature-high"></i> Humidity: ${data.main.humidity}%</strong>
                </div>
             `
             weather.innerHTML = empty
             bac1.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + input + "')"

          }
        else{
            let temperate =Math.floor( data.main.temp - 273)
            empty = 
                `
                <div class="mage"><img src="images/IMG-20230911-WA0013-removebg-preview.png" alt=""></div>
                <h2 class="mb-3" id="temp">${temperate}<sup>o</sup>C</h2>
                  <p class="my-3 ps" id="type">(${data.weather[0].description})</p>
                  <h4 id="name">${data.name}</h4>
                  <div class="d-flex justify-content-around">
                  <strong class="my-3" id="pres"><i class="fas fa-wind"></i> Pressure:${data.main.pressure}mmhg</strong> 
                   <strong id="hum"><i class="fas fa-temperature-high"></i> Humidity: ${data.main.humidity}%</strong>
                </div>
                 `
                 weather.innerHTML = empty
                 bac1.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + input + "')"
        }
    })

  
}