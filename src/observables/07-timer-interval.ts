import { timer, interval } from 'rxjs';

const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('Completado')
};
const hoyEn5 = new Date(); //Ahora
hoyEn5.setSeconds( hoyEn5.getSeconds() + 5 );

const interval$ = interval(1000);
// const timer$ = timer(2000);
// const timer$ = timer(2000, 1000);
const timer$ = timer(hoyEn5);

console.log('Inicio');
// interval$.subscribe( observer );
timer$.subscribe( observer );
console.log('Fin');

