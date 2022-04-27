import { interval, fromEvent } from 'rxjs';
import { takeUntil, tap, skip } from 'rxjs/operators';

const boton = document.createElement('button');
boton.innerHTML = 'Detener Timer';

document.querySelector('body').append(boton);

const counter$ = interval(1000);
const clickBtn$ = fromEvent(boton, 'click').pipe(
  tap(() => console.log('Tap antes de skip')),
  skip(1),
  tap(() => console.log('Tap despues de skip'))
);

counter$.pipe(takeUntil(clickBtn$)).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('complete'),
});
