import { of } from 'rxjs';
import { take, tap } from 'rxjs/operators';

const loggerTap = (val: number) => console.log('Tap: ', val);
const loggerTap2 = (val: number) => console.log('Tap 2: ', val);

const numeros$ = of(1, 2, 3, 4, 5).pipe(tap(loggerTap));

numeros$.pipe(tap(loggerTap2), take(3)).subscribe({
  next: (value) => console.log('next: ', value),
  complete: () => console.log('complete'),
});
