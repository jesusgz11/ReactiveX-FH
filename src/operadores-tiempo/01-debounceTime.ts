import { fromEvent } from 'rxjs';
import { debounceTime, pluck, distinctUntilChanged } from 'rxjs/operators';

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup');

input$
  .pipe(debounceTime(1000), pluck('target', 'value'), distinctUntilChanged())
  .subscribe(console.log);
