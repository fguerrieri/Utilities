var yesterday =  function(date1){
    var dt = new Date(date1);
  return new Date((dt.setDate(dt.getDate()-1))).toString();
}