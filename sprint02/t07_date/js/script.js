function getFormattedDate(dateObject){
    let options = {
        weekday: 'long'
    }
    let my_date = {
        date: dateObject.getDate(),
        month: dateObject.getMonth() + 1,
        year: dateObject.getFullYear(),
        hours: dateObject.getHours(),
        minutes: dateObject.getMinutes(),
        weekday: dateObject.toLocaleString('en-US', options)
    }
    function zero(a){
        return String(a).length === 1 ? '0' + a : a
    }
    return `${zero(my_date.date)}.${zero(my_date.month)}.${my_date.year} ${zero(my_date.hours)}:${zero(my_date.minutes)} ${my_date.weekday}`
}

const date0 = new Date(1993, 11, 1);
const date1 = new Date(1998, 0, -33);
const date2 = new Date('42 03:24:00');

console.log(getFormattedDate(date0)); // 01.12.1993 00:00 Wednesday
console.log(getFormattedDate(date1)); // 28.11.1997 00:00 Friday
console.log(getFormattedDate(date2)); // 01.01.2042 03:24 Wednesday
