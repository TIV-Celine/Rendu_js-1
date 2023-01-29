let idBouton = document.getElementById("bouton"); 
 
idBouton.addEventListener('click', intro); 
 
var i = 0;
while (i < 10) {
    if (i == 0) {
        console.log("Boucle while");
    }
    console.log(i);
    i++;
}

for (i = 0; i < 10; i++) {
    if (i == 0) {
        console.log("Boucle for");
    }
    console.log(i);
}

Button.classList.toggle('list');

function changeColor(color) { 
    document.body.style.background = color; 
}
