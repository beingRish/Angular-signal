import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../models/user';

export function fetchData() {
  const dataService = inject(UserService);
  return dataService.getUsers().pipe(map(users => users as User[]))
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient)

  getUsers(): Observable<User[]>{
    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .pipe(map(users => users as User[]))
  }
}
