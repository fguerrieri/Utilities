//guess number

//get a romdom integer
var num = Math.ceil(Math.random() *10);
console.log(num);
var gnum = prompt('indovina il numero da uno a 10');
if(gnum == num)
{
    alert('Matched');
    
}
else
    alert('no match. try another time');