import { of, Observer } from 'rxjs';

const observer: Observer<number> = {
  next: (next) => console.log(next),
  error: null,
  complete: () => console.log('Terminado'),
};

const obs$ = of(1, 2, 3, 4, 5, 6);

console.log('Inicio OBS');
obs$.subscribe(observer);
console.log('Fin OBS');
