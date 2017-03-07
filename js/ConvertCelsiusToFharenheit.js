<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JS Bin</title>
</head>
<body>
Insert Celsius<input type="text" id="celsius"/><br>
<input type="button" onClick="calculate()" value="Calculate"/>
<p>The Fahrenheit is:
  <span id="result"></span></p>
</body>
</html>

function calculate()
{
  var celsius= document.getElementById("celsius").value;
  alert(celsius);
  var far= (celsius * (9/5)) +32;
  alert(far);
  document.getElementById("result").innerHTML= far;
  
}