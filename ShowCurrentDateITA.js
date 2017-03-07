
var today= new Date();
var day = today.getDay();
var dayList = ["Sunday", "Monday", "Tuesday", "Wedneday", "Thursday", "Friday", "Saturday"];
console.log("Today is:" + dayList[day] + ".");
var hour = today.getHours();
var minute = today.getMinutes();
var second= today.getSeconds();

var prepand= (hour >= 12)? hour -12: hour;

console.log("Current Time: "+ hour + prepand + " : " + minute + " : "+second);

