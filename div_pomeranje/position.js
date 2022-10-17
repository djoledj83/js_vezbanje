var x = 100;
var y = 150;
var z = 0;
function pos(dx,dy) {
    if (!document.getElementById) return;
    x += 30*dx;
    y += 30*dy;
    var obj = document.getElementById("square"); 
    obj.style.top=y + "px";
    obj.style.left=x + "px";
}

// function trOsa(){
//     if(!document.getElementById) return;
// if(document.getElementById(zPlus).clicked == true){ 
//     document.getElementById("square").style.zIndex++;
// } else if(document.getElementById(zMinus).clicked == true){
//     document.getElementById("square").style.zIndex--;
// }
// }

function zPlus(dz){
    if (!document.getElementById) return;
    z += dz;
    var obj = document.getElementById("square");
    obj.style.zIndex = z+1;
}

function zMinus(dz){
    if (!document.getElementById) return;
    z += dz;
    var obj = document.getElementById("square");
    obj.style.zIndex = z+1;
}

function hideSquare() {
    if(!document.getElementById) return;
    var obj = document.getElementById("square");
    obj.style.display="none";
}

function showSquare() {
    if(!document.getElementById) return;
    var obj = document.getElementById("square");
    obj.style.display="block";
}