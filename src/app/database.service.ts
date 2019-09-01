import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from './model/user';
import { Userlogin } from './model/userlogin';

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
  baseUrl = 'http://127.0.0.1:8080';
  users: any;
  userlogin: Userlogin;

constructor(private http: HttpClient) {
  this.http.get(`${this.baseUrl}/api/database.php`);
 }
// handleError(error: HttpErrorResponse) {
//   console.log(error);
//   return throwError('Error! something went wrong.');
// }
// getuser(): Observable<User[]> {
//   return this.http.get(`${this.baseUrl}/api/read.php`).pipe(
//     map((res) => {
//       console.log(res);
//       this.users = res;
//       return this.users;
//   }),
//   catchError(this.handleError));
// }

readUser(): Observable<User[]> {
  return this.http.get<User[]>(`${this.baseUrl}/api/read.php`);
}

createuser(user: User): Observable<User>{
  return this.http.post<User>(`${this.baseUrl}/api/create.php`, user);
}

updateUser(user: User) {
  return this.http.put<User>(`${this.baseUrl}/api/update.php`, user);
}

deleteUser(id: number) {
  return this.http.delete<User>(`${this.baseUrl}/api/delete.php/?id=${id}`);
}

login(userlogin: Userlogin) {
  return this.http.put<Userlogin>(`${this.baseUrl}/api/checkuser.php`, userlogin);
}

}
