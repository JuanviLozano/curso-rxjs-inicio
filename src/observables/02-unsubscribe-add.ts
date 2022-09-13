import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('Completado')
}

const intervalo$ = new Observable<number>( subs => {

    let count = 0;
    // Crear un contador
    const interval = setInterval(() => {
        count++;
        subs.next(count);
    }, 1000);

    setTimeout(() => {
        subs.complete()
    }, 2500);

    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido');
    }
})

const subscription1 = intervalo$.subscribe( observer ); 
const subscription2 = intervalo$.subscribe( observer ); 
const subscription3 = intervalo$.subscribe( observer ); 

subscription1.add(subscription2);

setTimeout(() => {
    subscription1.unsubscribe();
    subscription2.unsubscribe();
    subscription3.unsubscribe();
    console.log('Completado intervalo');
}, 6000);