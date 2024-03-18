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
    let traduccion = '';
    for (let i = 0; i < frase.length; i++) {
        const letra = frase.charAt(i);
        if ('aeiou'.includes(letra)) {
            traduccion += letra + 'p' + letra;
        } else {
            traduccion += letra;
        }
    }
    return traduccion;
}



