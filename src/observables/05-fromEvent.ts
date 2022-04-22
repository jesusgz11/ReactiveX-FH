import { fromEvent } from 'rxjs';

const obsClick$ = fromEvent<MouseEvent>(document, 'click');
const obsKeyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');

obsClick$.subscribe(({ x, y }) => {
  console.log(x, y);
});

obsKeyUp$.subscribe(({ key }) => {
  console.log(key);
});
