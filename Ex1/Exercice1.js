function addition(nombre1, nombre2) {
    if (nombre1 === nombre2) {
        return 0;
    }
    console.log("La fonction s'exécute");
    if (nombre1 < nombre2) {
        return nombre2 - nombre1;
    }
    if (nombre1 > nombre2) {
        return nombre1 + nombre2;
    }
    return null;
}
function continuation(nombre, nombreBoucle) {
    let nombre2 = nombre;
    while (nombre < (nombre2 + nombreBoucle)) {
        console.log(nombre);
        nombre++;
    }
    return nombre;
}

continuation(10, 5);