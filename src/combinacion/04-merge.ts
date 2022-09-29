import { from, fromEvent, interval, merge, take } from "rxjs";

const keyup$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');
const interval$ = interval(1000);

merge(
    keyup$, click$, interval$.pipe( take(10))
).subscribe( console.log )