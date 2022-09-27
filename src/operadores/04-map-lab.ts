import { fromEvent, map, tap } from 'rxjs';

const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae ligula nec arcu placerat cursus eget at arcu. Vivamus ac tempor sem. Ut tempus at enim quis sodales. Vestibulum gravida non diam sit amet malesuada. Cras et erat dignissim, gravida erat ut, ultrices mauris. Aenean id congue magna. Morbi et mollis orci. Praesent et mollis orci. Proin sagittis, dui et ultrices mollis, enim diam fermentum est, sed semper odio dolor ut sapien. Cras vulputate viverra ante sit amet dignissim. Aenean eget leo eleifend libero facilisis rutrum. Aenean quis blandit velit. Nunc ut sollicitudin velit. Sed finibus accumsan eros, vitae sagittis justo auctor id.
<br/><br/>
Aenean pharetra mauris at tortor sagittis, egestas vulputate lorem gravida. Phasellus quis nibh ut erat egestas bibendum aliquam a elit. Nunc suscipit semper ipsum. Donec finibus facilisis leo non egestas. Aenean quis ullamcorper nisi. Sed aliquam lectus non orci consequat, nec accumsan odio efficitur. Nullam efficitur sapien eget ante tristique, vitae convallis erat semper.
<br/><br/>
Suspendisse accumsan felis nisi, commodo vehicula massa placerat sit amet. Maecenas consectetur lorem sem, non vehicula turpis facilisis quis. Fusce nulla ex, viverra vitae arcu ut, dignissim cursus nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam a dolor eget orci convallis porttitor. Aliquam vel venenatis ipsum, at fringilla dolor. Sed convallis lorem leo.
<br/><br/>
Vivamus non tincidunt erat. In hac habitasse platea dictumst. Praesent viverra malesuada sapien, quis porttitor massa sollicitudin eu. Suspendisse potenti. Praesent vehicula varius molestie. Fusce sed est porttitor, laoreet odio pellentesque, maximus tortor. Nullam blandit mattis velit non venenatis.
<br/><br/>
Vivamus orci velit, bibendum eget mollis nec, commodo ac velit. Mauris nec elementum ligula. Sed at nisi dolor. Integer erat odio, bibendum in mauris et, maximus placerat tellus. Praesent rhoncus leo convallis erat suscipit pharetra. Maecenas molestie sapien a tincidunt dictum. Ut porta, nunc eget efficitur laoreet, enim nulla convallis sem, sit amet auctor nunc sem quis mi. Phasellus mauris dui, pharetra in malesuada et, pharetra in augue. Pellentesque eu mauris varius, ullamcorper risus at, vehicula dolor.
`;

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

// funcion que haga el calculo
const calcularPorcentajeScroll = (event) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;
    
    return ( scrollTop / (scrollHeight - clientHeight) ) * 100;
    
};

// streams
const scroll$ = fromEvent(document, 'scroll');
// scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
    map( calcularPorcentajeScroll ),
    tap( console.log )
);

progress$.subscribe( porcentaje => {
    progressBar.style.width = `${ porcentaje }%`
});