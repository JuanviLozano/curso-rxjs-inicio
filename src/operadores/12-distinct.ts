import { distinctUntilKeyChanged, from } from 'rxjs';

interface Personaje {
    nombre: string
};

const personajes: Personaje[] = [
    { nombre: 'Megaman'},
    { nombre: 'X'},
    { nombre: 'Zero'},
    { nombre: 'Megaman'},
    { nombre: 'Zero'},
    { nombre: 'X'},
    { nombre: 'X'},
    { nombre: 'Zero'},
];

from( personajes ).pipe(
    distinctUntilKeyChanged('nombre')
)
.subscribe( console.log );