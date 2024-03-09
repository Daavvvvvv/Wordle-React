let words:string[] = [
    'COMPUTADORA',
    'TELEFONO',
    'LAPTOP',
    'TELEVISION',
    'AUDIFONOS',
    'TECLADO',
    'MOUSE',
    'MONITOR',
    'IMPRESORA',
    'PROYECTOR',
    'DISCO DURO',
    'MEMORIA RAM',
    'MICROFONO',
    'BATERIA',
    'CARGADOR',
    'CAMARA',
    'TABLET',
    'SMARTPHONE',
    'ROUTER',
    'SWITCH',
    'SERVIDOR',
    'ADAPTADOR',
    'ALTAVOZ',
    'AURICULARES',
    'CABLE',
    'CARGADOR',
    'CONECTOR',
]

export function getRandomWord(){

    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex].toUpperCase();
}