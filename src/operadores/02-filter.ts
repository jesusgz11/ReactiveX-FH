import { range, from, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

fromEvent<KeyboardEvent>(document, 'keyup')
  .pipe(
    map((event) => event.code),
    filter((code) => code === 'Enter')
  )
  .subscribe(console.log);

range(20, 10)
  .pipe(filter((value) => value % 2 === 1))
  .subscribe(console.log);

interface Personaje {
  tipo: string;
  nombre: string;
}

const personajes: Personaje[] = [
  {
    tipo: 'heroe',
    nombre: 'Batman',
  },
  {
    tipo: 'heroe',
    nombre: 'Robin',
  },
  {
    tipo: 'villano',
    nombre: 'Joker',
  },
];

from(personajes)
  .pipe(filter((personaje) => personaje.tipo === 'heroe'))
  .subscribe(console.log);
