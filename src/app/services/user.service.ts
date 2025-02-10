import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export function fetchData() {
  const dataService = inject(UserService);
  return dataService.getUser().pipe(map(users => users as any[]))
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient)

  getUser(): Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
}
