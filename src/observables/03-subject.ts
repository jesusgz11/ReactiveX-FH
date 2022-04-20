import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<number> = {
  next: (resp) => console.log(resp),
  error: (error) => console.error(error),
  complete: () => console.info('Completado'),
};

const intervalo$ = new Observable<number>((subscriber) => {
  const interval = setInterval(() => subscriber.next(Math.random()), 1000);

  return () => {
    clearInterval(interval);
    console.log('Intervalo destruido');
  };
});

/**
 * 1 - Casteo múltiple
 * 2 - Tambien es un observer
 * 3 - Tiene next, error y complete
 */
const subject = new Subject<number>();
const subscriptionInterval = intervalo$.subscribe(subject);

const subscription1 = subject.subscribe(observer);
const subscription2 = subject.subscribe(observer);

setTimeout(() => {
  subject.next(10);
  subject.complete();
  subscriptionInterval.unsubscribe();
}, 3500);
