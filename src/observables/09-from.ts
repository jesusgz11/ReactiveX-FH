import { from, of } from 'rxjs';

/*
  of => Toma argumentos y genera una secuencia
  from => Array, Promise, iterable, observable
*/

const observer = {
  next: (val) => console.log('next', val),
  complete: () => console.log('Completado'),
};

const miGenerador = function* () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
};

const miIterable = miGenerador();

const source$ = from(miIterable);

source$.subscribe(observer);

// const source$ = from(fetch('https://api.github.com/users/jesusgz11'));

// source$.subscribe(observer);
// source$.subscribe(async (response) => {
//   console.log(response.ok);
//   const data = await response.json();
//   console.log(data);
// });

// const sourceOf$ = of([1, 2, 3, 4, 5]);
// const sourceFrom$ = from([1, 2, 3, 4, 5]);

// const sourceOf2$ = of('Jesus');
// const sourceFrom2$ = from('Jesus');

// sourceFrom$.subscribe(observer);
// sourceOf$.subscribe(observer);

// sourceFrom2$.subscribe(observer);
// sourceOf2$.subscribe(observer);
