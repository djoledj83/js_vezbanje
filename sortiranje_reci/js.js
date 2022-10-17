var numbernames=0;
var names = new Array();

function SortNames() {
    name = document.theForm.novoIme.value;
    names[numbernames]=name.toUpperCase();
    numbernames++;
    names.sort();
    document.theForm.sortirano.value=names.join("\n");
}