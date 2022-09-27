import { range, map, fromEvent, pluck, mapTo } from 'rxjs';

// Nos permite cambiar los valo
// range(1,5).pipe(map<number, number>(val => val * 10)).subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup' );
const keyupCode$ = keyup$.pipe(map(event => event.code));

// Pluck deprecado, mejor usar map
const keyopPluck$ = keyup$.pipe(pluck('target', 'baseURI'));

// MapTo deprecado
const keyupMapTo$ = keyup$.pipe(
    mapTo('tecla presionada')
);


keyupCode$.subscribe(code => console.log('map', code));
keyopPluck$.subscribe(code => console.log('pluck', code));
keyupMapTo$.subscribe(code => console.log('mapTo', code));




