import { first, fromEvent, map, of, tap } from 'rxjs';

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    tap<MouseEvent>( console.log ),
    map( ({ clientX, clientY}) => ({ clientY, clientX }) ),
    // map( event => ({
    //     clientY: event.clientY,
    //     clientX: event.clientX
    // }) )


    first( event => event.clientY >= 150)
).subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('Complete')
});


// const numeros$ = of(1,2,3,4,5);

// numeros$.pipe(
//     first()
// ).subscribe({
//     next: val => console.log('next:', val),
//     complete: () => console.log('Complete')
// });

