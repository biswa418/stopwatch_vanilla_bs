
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
let content2 = 0;
var id2 = null; //for ms var

// flag for the first time starting
let started = false;


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

    }, 10);

};

start.addEventListener('click', function (e) {
    if (!started) {
        started = true;
        startCounter();

        body.style.animation = "gradient 15s ease infinite";

        waves[0].style.animation = "wave 10s -3s linear infinite";
        waves[1].style.animation = "wave 18s linear reverse infinite";
        waves[2].style.animation = "wave 20s -1s reverse infinite";

        for (let i in waves) {
            waves[i].style.display = "block";
        }
    }
});

stop.addEventListener('click', function () {
    started = false;
    clearInterval(id);

    body.style.animation = "none";

    for (let i in waves) {
        waves[i].style.animation = "none";
    }


});

reset.addEventListener('click', function () {
    content = 0;

    clearInterval(id);

    second.innerText = "00";
    minutes.innerText = "00";
    ms.innerText = "00";
    hours.style.display = "none";
    separator.style.display = "none";

    body.style.animation = "none";

    for (let i in waves)
        waves[i].style.display = "none";
})



