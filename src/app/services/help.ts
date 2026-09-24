import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; // <-- Import RxJS
@Injectable({
  providedIn: 'root'
})
export class UserApiService {
constructor(private http: HttpClient) {}

  // Ajoute explicitement le type de retour ici :
  getUserApiData(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}