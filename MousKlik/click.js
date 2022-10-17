function mouseStatus(e){
    if (!e) e = window.event;
    btn = e.button;
    whichone = (btn < 2) ? "Stiso si left" : "A sada si stiso Right";
    message=e.type + " : " + whichone + "<br>";
    document.getElementById('testarea').innerHTML += message;
}

obj=document.getElementById('testlink');

obj.onmousedown = mouseStatus;
obj.onmouseup = mouseStatus;
obj.onclick = mouseStatus;
obj. ondblclick = mouseStatus;