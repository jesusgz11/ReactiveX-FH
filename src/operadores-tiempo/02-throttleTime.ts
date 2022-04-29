import { asyncScheduler, fromEvent } from 'rxjs';
import { throttleTime, pluck, distinctUntilChanged } from 'rxjs/operators';

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup');

input$
  .pipe(
    throttleTime(1000, asyncScheduler, {
      leading: true,
      trailing: false,
    }),
    pluck('target', 'value'),
    distinctUntilChanged()
  )
  .subscribe(console.log);
