function displayKey(e) {
    if (e.keyCode) {
        var keycode=e.keyCode;
    } else {
        var keycode=e.which;
    }
    character=String.fromCharCode(keycode);
    var keysParagraph = document.getElementById('keys');
    keysParagraph.innerHTML += character;
}