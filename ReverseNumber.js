//reverse number

function reverse_a_number(n)
{
  
  n= n+ "";
//oppure var s= n.toString();
  
  return n.split("").reverse().join("");
  
}
alert(reverse_a_number(32243));