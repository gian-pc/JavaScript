

const persona = {
    nombre: 'Gian',
    apellido: 'Paucar',
    edad: 23,
    direccion: {
        ciudad: 'Lima',
        zip: 12345,
        lat: 14.3232,
        lng: 34.923332
    }
};

// console.table(persona);

const persona2 = { ...persona }; // spread operator - clonar un objeto
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);