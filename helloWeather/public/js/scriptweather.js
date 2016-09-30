var apiKey = 'c90bbc11600af668f52e855cadc5f31c';
//var zip = document.getElementById("zipsubmit").value;



function getWeather() {

    document.getElementById("zipsubmit").addEventListener("click", function (event) {
        var req = new XMLHttpRequest();
        var ziporcity = document.getElementById("zip").value;
        if (!isNaN(zip)) {
            req.open("GET", "http://api.openweathermap.org/data/2.5/weather?zip=" + ziporcity + ",us&units=imperial&appid=c90bbc11600af668f52e855cadc5f31c", true);
        }
        if (isNaN(zip)) {
            req.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + ziporcity + ",us&units=imperial&appid=c90bbc11600af668f52e855cadc5f31c", true);
        }

        req.addEventListener('load', function () {
            if (req.status >= 200 && req.status < 400) {
                var response = JSON.parse(req.responseText);
                document.getElementById('city').innerHTML = response.name;
                document.getElementById('temperature').textContent = response.main.temp;
                document.getElementById('humidity').textContent = response.main.humidity;
            } else {
                console.log("Error in network request: " + req.statusText);
            }
        });
        req.send(null);
        event.preventDefault();

    });
}

function httpbin() {
    document.getElementById('postsubmit').addEventListener('click', function (event) {
        var req = new XMLHttpRequest();
        var payload = {
            boom: null
        };
        payload.boom = document.getElementById('post1').value;
        req.open('POST', 'http://httpbin.org/post', true);
        req.setRequestHeader('Content-Type', 'application/json');
        req.addEventListener('load', function () {
            if (req.status >= 200 && req.status < 400) {
                var response = JSON.parse(req.responseText);
                var parsResp = JSON.parse(response.data);
                //alert(req.response); //debug
                document.getElementById('httpbin').textContent = parsResp.boom;
            } else {
                console.log("Error in network request: " + req.statusText);
            }
        });
        req.send(JSON.stringify(payload));
        event.preventDefault();
    });
}


document.addEventListener("DOMContentLoaded", getWeather);
document.addEventListener("DOMContentLoaded", httpbin);
