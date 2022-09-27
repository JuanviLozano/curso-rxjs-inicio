import { debounceTime, distinctUntilChanged, fromEvent, map, pluck } from 'rxjs';

const click$ = fromEvent(document, 'click');

click$.pipe(
    debounceTime(3000)
).subscribe( console.log )


// Ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append( input );

const input$ = fromEvent<KeyboardEvent>( input, 'keyup' );

input$.pipe(
    debounceTime(1000),
    pluck('target', 'value'),
    distinctUntilChanged()
).subscribe( console.log )
