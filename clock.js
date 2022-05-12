function updateDate(){
 var date= new Date();
 var day= date.getDay();
 var dte=date.getDate();
 var mth= date.getMonth()
 var year = date.getFullYear();
 var hrs= date.getHours();
 var min= date.getMinutes();
 var sec= date.getSeconds();

 var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  day= dayNames[day];

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
   mth = months[mth];
var ampm= "";
if( hrs>12){
    ampm= "pm";
}else{
    ampm= "am";
}


   document.getElementById("day").innerHTML= day;
   document.getElementById("date").innerHTML= dte;
   document.getElementById("mth").innerHTML= mth;
   document.getElementById("year").innerHTML= year;
   document.getElementById("hrs").innerHTML= hrs + ":";
   document.getElementById("min").innerHTML= min + ":";
   document.getElementById("sec").innerHTML= sec;
   document.getElementById("ampm").innerHTML= ampm;
}

setInterval(updateDate,1)
document.getElementById("dte").addEventListener('mouseover',change1);
document.getElementById("dte").addEventListener('mouseleave',change2);
function change1(){
    document.getElementById("dte").style.backgroundColor="#2F4F4F"
    document.getElementById("dte").style.color="cyan"
    document.getElementById("dte").style.animation="    animation: myAnimation 1s;"
    document.getElementById("main_container").style.animation="my2 5s"
}
function change2(){
    document.getElementById("dte").style.backgroundColor="#778899"
    document.getElementById("dte").style.color="white"    
}

