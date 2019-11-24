const proxy = 'http://cors-anywhere.herokuapp.com/'

//To show current date
let options = {weekday: 'long', year: '2-digit', month: 'long', day: 'numeric'};
let today = new Date();
console.log(today);


    // Current weather 
$('form').on('click', (event) =>{
        event.preventDefault();
        if(event.target.tagName !== 'INPUT'){
            return;
        }
        const userInput = $('input[type="text"]').val();
        $.ajax({ 
    //openweathermap current weather api
            url: `Https://api.openweathermap.org/data/2.5/weather?appid=81fc1487f09e04dba61c57f2c8c3a3ef&q=${userInput}&units=imperial&zip=${userInput}`,
        

    //retrieve data
        }).then(
            
            (data)=>{

                var iconCode = data.weather[0].icon;
                var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";

                console.log(data);
               $('#city').html(data.name);
               $('#temp').html(Math.ceil(data.main.temp)  + '° F');
               $('#icon').attr('src', iconUrl);
               $('#date').html(today.toLocaleDateString(options));
                
            },
            (error)=>{
                console.log('Error:', error);
            }
        )
    });
    // 5 day forecast weather
    $('form').on('click', (event) =>{
        event.preventDefault();
        if(event.target.tagName !== 'INPUT'){
            return;
        }
        const userInput = $('input[type="text"]').val();
        $.ajax({
    //openweathermap 5 day weather forecast api
        url: `Https://api.openweathermap.org/data/2.5/forecast?appid=81fc1487f09e04dba61c57f2c8c3a3ef&q=${userInput}&units=imperial&zip=${userInput}`

    //retrieve data
        }).then(
            (data)=>{
                console.log(data);
                $('#First-Forecast').html(data.list[3].dt_txt + ' ' + Math.ceil(data.list[3].main.temp) + '° F ' + data.list[3].weather[0].description);
                $('#Second-Forecast').html(data.list[11].dt_txt + ' ' + Math.ceil(data.list[11].main.temp) + '° F ' + data.list[11].weather[0].description);
                $('#Third-Forecast').html(data.list[19].dt_txt + ' ' + Math.ceil(data.list[19].main.temp) + '° F ' + data.list[19].weather[0].description);
                $('#Fourth-Forecast').html(data.list[27].dt_txt + ' ' + Math.ceil(data.list[27].main.temp) + '° F ' + data.list[27].weather[0].description);
                $('#Fifth-Forecast').html(data.list[35].dt_txt + ' ' + Math.ceil(data.list[35].main.temp) + '° F ' + data.list[35].weather[0].description);
                
            },
            (error)=>{
                console.log('Error:', error);
            }
        )
    });  