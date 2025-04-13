import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactFormData } from '../model/product'; 

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor() {}

  addContactMe(data: ContactFormData): Observable<any> {
    console.log('Pretending to send:', data);
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(data);
        observer.complete();
      }, 1000);
    });
  }
}
