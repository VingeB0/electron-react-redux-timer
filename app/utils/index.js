export const formatTime = (time) => time < 10 ? '0' + time : time;

let now = new Date();
let year = now.getFullYear();
let month = now.getMonth();
let day = now.getDay();

export const nowDate = formatTime(day) + '.' + formatTime(month) + '.' + year;
