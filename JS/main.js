function data() {
    var date = new Date();
    var an;
    var text;

    an = date.getFullYear();

    text = "© " + an + " ER";

   document.getElementById("text-data").innerHTML = text;
}

data();
