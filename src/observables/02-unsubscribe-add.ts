import { Observable, Observer } from 'rxjs';

const observer: Observer<number> = {
  next: (resp) => console.log(resp),
  error: (error) => console.error(error),
  complete: () => console.info('Completado'),
};

const intervalo$ = new Observable<number>((subscriber) => {
  let counter = 0;

  const interval = setInterval(() => {
    counter++;
    subscriber.next(counter);
  }, 1000);

  setTimeout(() => {
    subscriber.complete();
  }, 2500);

  return () => {
    clearInterval(interval);
    console.log('Intervalo destruido');
  };
});

// New instance by default per subscription created

const subscription1 = intervalo$.subscribe(observer);
const subscription2 = intervalo$.subscribe(observer);
const subscription3 = intervalo$.subscribe(observer);

subscription1.add(subscription2);
subscription2.add(subscription3);

setTimeout(() => {
  subscription1.unsubscribe();

  console.log('Completado Timeout');
}, 6000);
