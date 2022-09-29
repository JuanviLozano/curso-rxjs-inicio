import { debounceTime, fromEvent, map, mergeAll, Observable } from "rxjs";
import { ajax } from "rxjs/ajax";
import { GithubUser } from "./../interfaces/github-user.interface";
import { GithubUsers } from "./../interfaces/github-users.interface";

// Referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append(textInput, orderList);

// Helpers
const mostrarUsuarios = ( usuarios: GithubUser[]) => {
    orderList.innerHTML = '';
    console.log( usuarios );
    
    for (const usuario of usuarios) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;

        const anchor = document.createElement('a');
        anchor.href = usuario.html_url;
        anchor.text = 'Ver página';
        anchor.target = '_blanck';

        li.append( img );
        li.append( usuario.login + '' );
        li.append( anchor );

        orderList.append(li);
    }
};

// Streams
const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup');

input$.pipe(
    debounceTime(500),
    map( event => ajax.getJSON(`https://api.github.com/search/users?q=${ event.target['value'] }`)),
    mergeAll(),
    map(items => items['items'])
).subscribe( mostrarUsuarios );

