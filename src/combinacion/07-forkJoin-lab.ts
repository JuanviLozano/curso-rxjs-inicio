import { catchError, forkJoin, of } from "rxjs";
import { ajax } from "rxjs/ajax";

const GITHUB_API_URL = 'https://api.github.com/users';
const GITHUB_USERS = 'juanvilozano';

forkJoin({
    usuario: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USERS}`),
    repos: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USERS}/refpos`),
    gists: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USERS}/gists`),
}).pipe(
    catchError(err => of(err.message))
).subscribe( console.log );