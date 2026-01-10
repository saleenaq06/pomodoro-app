const bells = new Audio('bell.wav');
const startBtn = document.querySelector(".btn-start");
const session = document.querySelector(".minutes");
let myInterval;
let state = true;

const appTimer = () => {
    const sessionAmount = Number.parseInt(session.textContent);

    if (state) {
        state = false;
        let totalSeconds = sessionAmount * 60;

        const updateSeconds = () => {
            const minuteDiv = document.querySelector(".minutes");
            const secondDiv = document.querySelector(".seconds");

            totalSeconds--;

            let minutesLeft = Math.floor(totalSeconds / 60);
            let secondsLeft = totalSeconds % 60;

            if (minutesLeft < 10) {
                minuteDiv.textContent = "0" + minutesLeft;
            } else {
                minuteDiv.textContent = minutesLeft;
            }

            if (secondsLeft < 10) {
                secondDiv.textContent = "0" + secondsLeft;
            } else {
                secondDiv.textContent = secondsLeft;
            }
            //minuteDiv.textContent = `${minutesLeft}`;

            if (totalSeconds <= 0) {
                bells.play();
                clearInterval(myInterval);
                state = true;
                minuteDiv.textContent = sessionAmount;
                secondDiv.textContent = "00";
            }
        };

        myInterval = setInterval(updateSeconds, 1000);
    } else {
        alert("Session has already started!");
    }
};

startBtn.addEventListener("click", appTimer);