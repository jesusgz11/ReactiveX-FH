import { of } from 'rxjs';
import { pluck, catchError } from 'rxjs/operators';
import { ajax, AjaxError } from 'rxjs/ajax';

const url = 'https://api.github.com/users?per_page=5';

const atrapaError = (error: AjaxError) => {
  console.error('error: ', error);
  return of([]);
};

ajax(url)
  .pipe(pluck('response'), catchError(atrapaError))
  .subscribe({
    next: (users) => console.log('usuarios', users),
  });
