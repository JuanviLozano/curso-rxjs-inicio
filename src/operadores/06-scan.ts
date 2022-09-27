import { from, map, reduce, scan } from 'rxjs';

const numeros = [1,2,3,4,5];

const totalAcumulado = (acc, cur) =>  acc + cur;

// Reduce
from(numeros)
.pipe(reduce(totalAcumulado, 0))
.subscribe(console.log);

// Scan
from(numeros)
.pipe(scan(totalAcumulado, 0))
.subscribe(console.log);

interface Usuario {
    id?: string;
    autentication?: boolean;
    token?: string;
    edad?: number;
};

const user: Usuario[] = [
    { id: 'fher', autentication: false, token: null },
    { id: 'fher', autentication: true, token: 'ABC' },
    { id: 'fher', autentication: true, token: 'ABC123' },
];

const state$ = from(user).pipe(
    scan( (acc, cur) => {
        return {...acc, ...cur}
    }, { edad: 33})
);

const id$ = state$.pipe(
    map( state => state )
);

id$.subscribe(console.log);