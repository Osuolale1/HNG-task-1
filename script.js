function getCurrentDayOfWeek() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    return daysOfWeek[today.getUTCDay()];
}

function getCurrentUTCTimeInMilliseconds() {
    const now = new Date();
    const utcTimeInMilliseconds = now.getTime();
    return utcTimeInMilliseconds;
}


document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = getCurrentDayOfWeek();
document.querySelector('[data-testid="currentUTCTime"]').textContent = getCurrentUTCTimeInMilliseconds();



function updateCurrentTime() {
    const now = new Date();
    const utcOffsetInMilliseconds = 60 * 60 * 1000; // 1 hour in milliseconds
    const utcPlusOneTime = new Date(now.getTime() + utcOffsetInMilliseconds);

    const hours = utcPlusOneTime.getUTCHours().toString().padStart(2, '0');
    const minutes = utcPlusOneTime.getUTCMinutes().toString().padStart(2, '0');
    const seconds = utcPlusOneTime.getUTCSeconds().toString().padStart(2, '0');

    document.getElementById('currentTime').textContent = `${hours}:${minutes}:${seconds} (UTC+1)`;
}

// Call the update function initially
updateCurrentTime();

// Set up a timer to update the time every second (1000 milliseconds)
setInterval(updateCurrentTime, 1000);
