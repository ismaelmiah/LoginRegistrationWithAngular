import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../Model/User';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 1, firstName: 'A', lastName: 'B', email: 'a@gmail.com', password: 'Ismail1'},
      { id: 2, firstName: 'B', lastName: 'B', email: 'b@gmail.com', password: 'Ismail1'},
      { id: 3, firstName: 'C', lastName: 'B', email: 'c@gmail.com', password: 'Ismail1'},
      { id: 4, firstName: 'D', lastName: 'B', email: 'd@gmail.com', password: 'Ismail1'},
      { id: 5, firstName: 'E', lastName: 'B', email: 'e@gmail.com', password: 'Ismail1'},
    ];
    return {users};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
  }
}

