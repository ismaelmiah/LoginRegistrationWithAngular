import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../Model/User';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      {
        id: 1,
        firstName: 'Ashiq',
        lastName: 'Miah',
        email: 'admin@gmail.com',
        password: 'Ismail1',
<<<<<<< HEAD
        phone: '',
        gender: '',
        role: 'Admin',
        address: '',
        interests: '',
        dateOfBirth: '',
=======
>>>>>>> develop
      },
      {
        id: 2,
        firstName: 'Bappi',
        lastName: 'Roy',
        email: 'bappi@gmail.com',
        password: 'Ismail1',
<<<<<<< HEAD
        phone: '',
        gender: '',
        role: 'User',
        address: '',
        interests: '',
        dateOfBirth: '',
=======
>>>>>>> develop
      },
      {
        id: 3,
        firstName: 'Rabiul',
        lastName: 'Hasan',
        email: 'rabiul@gmail.com',
        password: 'Ismail1',
<<<<<<< HEAD
        phone: '',
        gender: '',
        role: 'User',
        address: '',
        interests: '',
        dateOfBirth: '',
=======
>>>>>>> develop
      },
      {
        id: 4,
        firstName: 'Tahsan',
        lastName: 'Ahamed',
        email: 'tahsan@gmail.com',
        password: 'Ismail1',
<<<<<<< HEAD
        phone: '',
        gender: '',
        role: 'User',
        address: '',
        interests: '',
        dateOfBirth: '',
=======
>>>>>>> develop
      },
      {
        id: 5,
        firstName: 'Zahid',
        lastName: 'Miah',
        email: 'zahid@gmail.com',
        password: 'Ismail1',
<<<<<<< HEAD
        phone: '',
        gender: '',
        role: 'User',
        address: '',
        interests: '',
        dateOfBirth: '',
      },
    ];
    
=======
      },
    ];
>>>>>>> develop
    return { users };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1;
  }
}
