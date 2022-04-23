import { fromEvent } from 'rxjs';
import { first, map, tap } from 'rxjs/operators';

let click = 0;

const logger = (value) => {
  click++;
  console.log(`Tap click ${click}`, value);
};

const click$ = fromEvent<MouseEvent>(document, 'click');

click$
  .pipe(
    tap<MouseEvent>(logger),
    map(({ clientX, clientY }) => ({ clientX, clientY })),
    first(({ clientY }) => clientY >= 150)
  )
  .subscribe({
    next: (value) => console.log('next:', value),
    complete: () => console.log('complete'),
  });
