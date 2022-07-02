var title = ["customer success analyst", "frontend developer", "product manager"];
let i = 0;

let inter = setInterval(function loop(){
    if(i >= title.length){
        i = 0;
    }
 
    showTitle();
    
 }, 2000)
 
 
 function showTitle(){
     document.getElementById("title").innerHTML = title[i++];
 }
 
 showTitle()    
 