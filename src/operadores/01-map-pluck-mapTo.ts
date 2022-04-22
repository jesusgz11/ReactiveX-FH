import { fromEvent, OperatorFunction, range } from 'rxjs';
import { pluck, map, mapTo } from 'rxjs/operators';

const keyupMapTo$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
  mapTo('Tecla presionada')
);

keyupMapTo$.subscribe(console.log);

const keyupPluck$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
  pluck('target', 'baseURI') as OperatorFunction<KeyboardEvent, string>
);

keyupPluck$.subscribe(console.log);

const keyupMap$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
  map((event) => event.code)
);

keyupMap$.subscribe(console.log);

range(1, 5)
  .pipe(map<number, number>((value) => value * 10))
  .subscribe(console.log);
