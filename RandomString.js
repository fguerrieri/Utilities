//generare stringa id di caratteri ramdom di lunghezza specificata

function random(lung)
{
  var text="";
  var char_list= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for(var i=0; i<lung; i++)
    {
      text += char_list.charAt(Math.floor(Math.random() * char_list.length));
    }
  return text;
  
}
console.log(random(8));