import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('siguiente [next]: ', value),
    error: error => console.warn('error [obs]: ', error),
    complete: () => console.info('Completado [obs]')
}

const obs$ = new Observable<string>(subs => {
    subs.next('hola');
    subs.next('mundo');

    //Forzar un error
    const a = undefined;
    a.nombre = 'Pedro';

    subs.complete();
    
    subs.next('ya no muestra mensaje');
});

obs$.subscribe(observer);

// obs$.subscribe(
//     valor => console.log('next: ', valor),
//     error => console.warn('error: ', error),
//     () => console.info('Completado')
// );

