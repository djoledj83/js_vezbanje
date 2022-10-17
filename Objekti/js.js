function printCard(){
    var nameLine = "<strong>Name: </strong>" + this.name + "<br>";
    var emailLine = "<strong>E-mail: </strong>" + this.email + "<br>";
    var addressLine = "<strong>Address: </strong>" + this.address + "<br>";
    var phoneLine = "<strong>Phone: </strong>" + this.phone + "<hr>";
    document.write(nameLine, emailLine, addressLine, phoneLine)
}

function Card(name, email, address, phone){
this.name = name;
this.email = email;
this.address = address;
this.phone = phone;
this.printCard = printCard;
}

var milos = new Card("Milos Djokovic", "djoledj@hotmail.com", "Stanoja Glavasa 29/4", "+381 60 33 77 556");
var marko = new Card("Marko Prokic", "mrmarkoni@gmail.com", "Donja Satornja 34314", "+381 64 19 23 878");
var zeljko = new Card("Zeljko Kojic", "zeljko@gmail.com", "Stanoja Glavasa 29/4", "+381 64 19 29 192");

milos.printCard();
marko.printCard();
zeljko.printCard();