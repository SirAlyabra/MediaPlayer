function asincrono() {
    setTimeout(function() {
        console.log("Hola despues de esperar")
    }, 10000); 
    console.log("Hola sin esperar")
}

asincrono();