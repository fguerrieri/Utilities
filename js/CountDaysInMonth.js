//function NUMEBER OF DAY IN A MOUNTH

function getDaysInMonth(month,year)
{
  return new Date(year, month, 0).getDate();
 
}

console.log(getDaysInMonth(9,2015));