import { fromEvent } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import { ajax } from 'rxjs/ajax';

// Referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

const url = 'https://httpbin.org/delay/1?arg='; // + jesus

input$
  .pipe(
    map((event) => (event.target as HTMLInputElement).value),
    switchMap((texto) => ajax.getJSON(url + texto))
  )
  .subscribe(console.log);
