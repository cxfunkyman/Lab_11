  function calculate(){
    if (document.querySelector('input[name="Resto"]:checked') == null) {
      alert("Please complete your order");
  }
  else {
  var total = 0;
  var Resto = document.querySelector('input[name="Resto"]:checked').value;

  if(Resto =='Hamburguer'){    
    total = 5.5;
  }
  else if(Resto =='Pizza'){
    total = 5.5;
  }
  else if(Resto =='Fish and Chips'){
    total = 5.5;
  }
  else if (Resto =='Salad') {
    total = 5.5;
  }
  else if (Resto =='Sandwich') {
    total = 5.5;
  }
  if(document.querySelector('[name="meat"]:checked') != null) {
    document.getElementById("price").setAttribute('value', '$' + (total + 3));
  }
  else {
    document.getElementById("price").setAttribute('value', '$' + total);    
  } 
  } 
}
function final() {
  var final = document.getElementById("price").value;

  if (final.length == 0) {
    alert("Please complete your order");
}
else {
  // var final = document.getElementById("price").value;

  if (confirm("Do you want to submit this order!")) {
      window.open("final.html", "_self");
  } 
  else {
    window.location.reload()
  }
}
}