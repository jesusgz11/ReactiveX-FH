import { asyncScheduler, observeOn, range } from 'rxjs';

const obs$ = range(1, 5).pipe(observeOn(asyncScheduler));

console.log('Inicio');
obs$.subscribe((next) => console.log(next));
console.log('Fin');
