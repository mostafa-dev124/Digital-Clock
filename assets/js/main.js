
function Time() {
    var myDate = new Date();
    var hour = (myDate.getHours() < 10) ? "00" + myDate.getHours() : myDate.getHours(),
        miniute = (myDate.getMinutes() < 10) ? "0" + myDate.getMinutes() : myDate.getMinutes(),
        second = (myDate.getSeconds() < 10) ? "0" + myDate.getSeconds() : myDate.getSeconds(),
        formate = (myDate.getHours() >= 12) ? "PM" : "AM";

    if (myDate.getHours() == 0) {
        hour = 12;
    } else if (myDate.getHours() > 12) {
        hour = myDate.getHours() - 12;
    } else {
        hour = myDate.getHours();
    }
    hour = (hour < 10) ? "0" + hour : hour;

    document.getElementsByClassName("hour")[0].innerHTML = hour;
    document.getElementsByClassName("miniute")[0].innerHTML = miniute;
    document.getElementsByClassName("second")[0].innerHTML = second;
    document.getElementsByClassName("format")[0].innerHTML = formate;

    var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var date = myDate.getDate();
    var year = myDate.getFullYear();

    document.getElementsByClassName("day")[0].innerHTML = "Day: " + day[myDate.getDay()];
    document.getElementsByClassName("date")[0].innerHTML = "Date: " + date + "  " + month[myDate.getMonth()] + " " + year;
}

Time();
setInterval(function () {
    Time();
}, 1000);