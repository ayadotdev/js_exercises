function countdown(seconds) {
    for (let i = seconds; i >= 0; i--) {
        console.log(i);
    }
}

function countdownR(seconds) {
    console.log(seconds);
    if (seconds === 0) {
        return;
    }
    countdownR(seconds - 1);
}




console.log(countdownR(10));