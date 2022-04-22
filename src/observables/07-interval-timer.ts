import { interval, timer } from 'rxjs';

const observer = {
  next: (val) => console.log(val),
  complete: () => console.log('Completado'),
};

// const hoy = new Date();
// hoy.setSeconds(hoy.getSeconds() + 5);

const timer$ = timer(5000);
// const timer2$ = timer(5000, 1000);
// const timer3$ = timer(hoy);

console.log('Inicio');
timer$.subscribe(observer);
console.log('Final');

const interval$ = interval(5000);

console.log('Inicio');
// interval$.subscribe(observer);
console.log('Final');
