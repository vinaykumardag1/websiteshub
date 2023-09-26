

function Facebook(){
  open("https://www.facebook.com/vinay.k.daggupati");
}
function instagram(){
  open("https://www.instagram.com/daggupati_vinay/");
}
function linkedIn(){
  open("https://www.linkedin.com/in/vinay-kumar-daggupati-b3141224b/");
}
function twitter(){
  open("https://twitter.com/vinay_daggupati");
}
setInterval(changeColor,1000);
function changeColor(){
  var x=document.getElementById("heading");
  if(x.style.color == "black")
    x.style.color = "red";
  else if(x.style.color == "red")
         x.style.color = "blue";
  else if(x.style.color == "blue")
         x.style.color = "yellow";
  else if(x.style.color =="yellow")
          x.style.color ="black";
  else x.style.color ="black";
  
}






