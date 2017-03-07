function longest(str)
{
  var array= [];
  array= str.split(' ');
  console.log(array);
  var result= array[0];
  for(var i=0; i< array.length; i++)
  {
    if(result.length < array[i].length)
      {
        result= array[i];
      }
  }
  return result;
}
alert(longest("Web Development Tutorial"));