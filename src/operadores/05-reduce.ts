import { interval } from 'rxjs';
import { take, reduce } from 'rxjs/operators';

const totalReducer = (acumulador: number, valorActual: number) => {
  return acumulador + valorActual;
};

interval(1000)
  .pipe(take(3), reduce(totalReducer, 0))
  .subscribe({
    next: (value) => console.log('next', value),
    complete: () => console.log('complete'),
  });
