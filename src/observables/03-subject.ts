import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('Completado')
}

const intervalo$ = new Observable<number>(subs => {

    const intervalID = setInterval(() => 
        subs.next( Math.random() ), 1000
    );

    return () => clearInterval( intervalID );
});

/**
 * 1- Casteo multiple 
 * 2- Tambien es un observer
 * 3- Next, error y complete
 */
const subject$ = new Subject();
intervalo$.subscribe( subject$ )

const sub1 = subject$.subscribe( rnd => console.log( observer ) );
const sub2 = subject$.subscribe( rnd => console.log( observer ) );

setTimeout(() => {
    subject$.next(10);
    subject$.complete();
}, 3500);

// const sub1 = intervalo$.subscribe( rnd => console.log('sub1: ', rnd) );
// const sub2 = intervalo$.subscribe( rnd => console.log('sub2: ', rnd) );
