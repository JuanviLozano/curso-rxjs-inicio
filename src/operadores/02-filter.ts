import { filter, from, fromEvent, map, range } from 'rxjs';

// range(1,10).pipe( filter( val => val % 2 === 1 ) ).subscribe(console.log);

range(20,30).pipe( filter((val, i) => {
    console.log('index', i);
    return val % 2 === 1;
}))//.subscribe( console.log );

const personajes = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    },
];

from(personajes).pipe(
    filter(val => val.tipo !== 'heroe'))
.subscribe( console.log );


const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup').pipe(
    map( event => event.code ),
    filter( key => key === 'Enter' )
);

keyup$.subscribe( console.log );



