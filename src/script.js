// contents
var second = document.getElementById('second');
var minutes = document.getElementById('minute');
var hours = document.getElementById('hour');
var ms = document.getElementById('ms');
var separator = document.getElementById('separator');

//buttons
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');

//for animations and dynamicity
var body = document.querySelector('body');
var waves = document.querySelectorAll('.wave');


//set the content
let content = 0;
var id = null; //interval global var

// flag for the first time starting
let started = false;

//counter function handles the increment
var startCounter = function () {

    id = setInterval(function () {
        content++;

        //one hour passed
        if (Number(minutes.innerText) >= 60) {
            content = 0; //reset the content

            //display the hidden timers
            hours.style.display = "block";
            separator.style.display = "block";

            if (Number(hours.innerText) < 9) {
                hours.innerText = "0" + (Number(hours.innerText) + 1);
            } else {
                hours.innerText = Number(hours.innerText) + 1;
            }

            //reset the minute timer
            minutes.innerText = "00";
        }

        //one minute passed
        if (Number(second.innerText) >= 60) {
            content = 0; //reset the content

            if (Number(minutes.innerText) < 9) {
                minutes.innerText = "0" + (Number(minutes.innerText) + 1);
            } else {
                minutes.innerText = Number(minutes.innerText) + 1;
            }
        }

        //one second passed
        if (content > 99) {
            content = 0;

            ms.innerText = "00";

            if (Number(second.innerText) < 9) {
                second.innerText = "0" + (Number(second.innerText) + 1);
            } else {
                second.innerText = (Number(second.innerText) + 1);
            }
        } else {

            if (Number(ms.innerText) < 9) {
                ms.innerText = "0" + content;
            } else {
                ms.innerText = content;
            }

        }
        // we're using 1/100 second precision as per most stopwatch uses these days, interval time is 10ms
    }, 10);

};

//when start button is clicked
start.addEventListener('click', function (e) {
    if (!started) {
        started = true;
        startCounter();

        // change css style
        body.style.animation = "gradient 15s ease infinite";

        waves[0].style.animation = "wave 10s -3s linear infinite";
        waves[1].style.animation = "wave 18s linear reverse infinite";
        waves[2].style.animation = "wave 20s -1s reverse infinite";

        for (let i in waves) {
            waves[i].style.display = "block";
        }
    }
});

//when stop button is clicked
stop.addEventListener('click', function () {
    started = false;
    clearInterval(id);

    //change css style
    body.style.animation = "none";

    for (let i in waves) {
        waves[i].style.animation = "none";
    }


});

//when reset button is clicked
reset.addEventListener('click', function () {
    content = 0;

    //clear the interval
    clearInterval(id);

    //reset everything
    second.innerText = "00";
    minutes.innerText = "00";
    ms.innerText = "00";
    hours.style.display = "none"; //hide the hour mark
    separator.style.display = "none";

    //css style reset
    body.style.animation = "none";

    for (let i in waves)
        waves[i].style.display = "none";
});



