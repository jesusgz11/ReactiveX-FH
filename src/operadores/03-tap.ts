import { range } from 'rxjs';
import { tap, map } from 'rxjs/operators';

const numeros$ = range(1, 5)
  .pipe(
    tap((valor) => {
      console.log('antes', valor);
      return 100;
    }),
    map((valor) => valor * 10),
    tap({
      next: (valor) => console.log('despues', valor),
      complete: () => console.log('Completado'),
    })
  )
  .subscribe(console.log);
