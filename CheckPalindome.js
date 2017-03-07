//palindrome

function check_palindrome(word)
{
  var cstr = word.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
  var count=0;
  
  //verifica se la stringa è vuota o no
  if(word ==="")
  {
    alert("stringa vuota");
    return false;
  }
  //verifica se pari o dispari
  if(word.length %2 ===0)
  {
    count = word /2;
    
  }
  else 
  {
    if(word.length ===1)
    {
      alert("Is palindrome");
      return true;
    }
  else 
    {
      count= (word.length -1 /2);
    }
  }
  //controllo caretteri e li tolgo se non combaciano
  for(var x=0; x< count; x++)
  {
      if(word[x] != word.slice(-1-x)[0])
        {
          alert("no plaindrome");
          return false;
        }
  }
  alert("is a palindrome");
  return true;
  
  
}
check_palindrome('madame');