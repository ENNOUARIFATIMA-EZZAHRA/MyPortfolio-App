import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './model/product';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  http = inject(HttpClient);

  getAboutInfo() {
    return this.http.get("http://localhost:3000/about").pipe(
      catchError(error => {
        console.error('Error fetching about info', error);
        return of(null);  // Return a default value or an observable with an error
      })
    );
  }

  getSkills() {
    return this.http.get<any[]>("http://localhost:3000/skills").pipe(
      catchError(error => {
        console.error('Error fetching skills', error);
        return of([]);  // Return an empty array on error
      })
    );
  }

  getProjects() {
    return this.http.get<Product[]>("http://localhost:3000/projects").pipe(
      catchError(error => {
        console.error('Error fetching projects', error);
        return of([]);  // Return an empty array on error
      })
    );
  }
  addContactMe(data:any){
    return this.http.post("http://localhost:3000/contactme",data).pipe(
      catchError(error => {
        console.error('Error fetching projects', error);
        return of([]);  // Return an empty array on error
      })
    );
}
}
