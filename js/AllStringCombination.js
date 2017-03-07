//tutte le combinazioni possibili di una stringa

function substring(str)
{
  var substr=[];
  for(var i=0; i<str.length; i++)
  {
    for(var y= i+1; y<= str.length; y++)
      {
        substr.push(str.substring(i,y));
      }
  }
  return substr;
  
}
alert(substring("dog"));