import { asyncScheduler, debounceTime, distinctUntilChanged, fromEvent, map, pluck, throttleTime } from 'rxjs';

const click$ = fromEvent(document, 'click');

click$.pipe(
    throttleTime(1000)
)//.subscribe( console.log )


// Ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append( input );

const input$ = fromEvent<KeyboardEvent>( input, 'keyup' );

input$.pipe(
    throttleTime(1000, asyncScheduler, {
        leading: true,
        trailing: true
    }),
    pluck('target', 'value'),
    distinctUntilChanged()
).subscribe( console.log )
