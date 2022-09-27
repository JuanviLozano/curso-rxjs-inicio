import { fromEvent, map, sampleTime } from "rxjs";


const click$ = fromEvent<MouseEvent>(document, 'click');
click$.pipe(
    map( ({ x,y }) => ({ x,y }) ),
    sampleTime(2000)
).subscribe( console.log );