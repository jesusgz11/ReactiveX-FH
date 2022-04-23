import { from } from 'rxjs';
import { scan, map } from 'rxjs/operators';

const numeros = [1, 2, 3, 4, 5];

const totalReducer = (acc: number, current: number) => acc + current;

from(numeros).pipe(scan(totalReducer, 0)).subscribe(console.log);

// Redux
interface Usuario {
  id?: string;
  autenticado?: boolean;
  token?: string;
  edad?: number;
}

const user: Usuario[] = [
  { id: 'jesusgz', autenticado: false, token: null },
  { id: 'jesusgz', autenticado: true, token: 'ABC' },
  { id: 'jesusgz', autenticado: true, token: 'ABC123' },
];

const state$ = from(user).pipe(
  scan<Usuario, Usuario>(
    (acc, cur) => {
      return { ...acc, ...cur };
    },
    { edad: 33 }
  )
);

const id$ = state$.pipe(map((state) => state.id));

id$.subscribe(console.log);
