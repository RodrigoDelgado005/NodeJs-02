const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese la frase a traducir: ', (frase) => {
    const traduccion = traducirFrase(frase);
    console.log(traduccion);
    rl.close();
});

function traducirFrase(frase) {
    const palabras = frase.split(' ');
    const traducciones = palabras.map(palabra => traducirPalabra(palabra));
    return traducciones.join(' ');
}

function traducirPalabra(palabra) {
    let traduccion = '';
    for (let i = 0; i < palabra.length; i++) {
        if ('aeiou'.includes(palabra[i])) {
            traduccion += palabra[i] + 'p' + palabra[i];
        } else {
            traduccion += palabra[i];
        }
    }
    return traduccion;
}




