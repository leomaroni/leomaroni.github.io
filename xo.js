function uhrzeitzeigen() {
            var uhrzeitElement = document.getElementById("uht");
            var heute = new Date();
            
            uhrzeitElement.innerHTML = heute.getHours() + ":" + heute.getMinutes() + ":" + heute.getSeconds();
        }
        setInterval(uhrzeitzeigen, 0,1)
        uhrzeitzeigen();