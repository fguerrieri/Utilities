//controllare che è una stringa

is_string = function(input)
{
 
  console.log(Object.prototype.toString.call(input));
  if(Object.prototype.toString.call(input)=== '[object String]')
  return true ;
  else return false;
};
console.log(is_string("as"));