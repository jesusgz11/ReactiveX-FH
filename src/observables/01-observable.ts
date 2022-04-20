import { Observable, Observer } from 'rxjs';

const observer: Observer<string> = {
  next: (resp) => console.log(resp),
  error: (error) => console.error(error),
  complete: () => console.info('Completado'),
};

// const obs$ = Observable.create()
const obs$ = new Observable<string>((subs) => {
  subs.next('Hola');
  subs.next('Hola');

  subs.next('Hola');
  subs.next('Hola');

  // Error
  // const a = undefined;
  // a.nombre;

  subs.complete();

  subs.next('Hola');
  subs.next('Hola');
});

// Manera 1
// obs$.subscribe(
//   (resp) => console.log(resp),
//   (error) => console.error(error),
//   () => console.info('Completado')
// );

// Manera 2

obs$.subscribe(observer);
