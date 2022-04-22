import { asyncScheduler } from 'rxjs';

// Same as
//  setTimeout(() => {}, 2000)
//  setInterval(() => {}, 2000)

const saludar = () => console.log('Hola Mundo');
const saludar2 = (state) => console.log(`Hola ${state}`);

asyncScheduler.schedule(saludar, 2000);
asyncScheduler.schedule(saludar2, 2000, 'Jesus');

const subscription = asyncScheduler.schedule(
  function (state) {
    console.log('state', state);
    this.schedule(state + 1, 1000);
  },
  3000,
  0
);

// Way to unsubscribe 1

// setTimeout(() => {
//   subscription.unsubscribe();
// }, 6000);

// Way to unsubscribe 2

asyncScheduler.schedule(() => subscription.unsubscribe(), 6000);
