var texto = "Xianyun";
var mapObj = {
    a:"1",
    e:"2",
    i:"3",
    o:"4",
    u:"5"
};

texto = texto.replace(/a|e|i|o|u/g, function(matched){
    return mapObj[matched];
  });
  
  console.log(texto)