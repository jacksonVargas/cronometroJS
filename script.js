let hh = 0;
let mm = 0;
let ss = 0;
let time = 1000;
let cron;

start = () => {
    cron = setInterval(() => {
        timer();
    }, time);
}

pause = () => {
    clearInterval(cron);
}

stop = () => {
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;

    document.querySelector('.counter').innerText = '00:00:00';
}

timer = () => {
    ss ++;
    if(ss == 60) {
        ss = 0;
        mm ++;

        if(mm == 60) {
            mm = 0;
            hh ++;
        }
    }

    let format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    document.querySelector('.counter').innerText = format;
}