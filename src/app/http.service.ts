import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  http = inject(HttpClient);

  getAboutInfo() {
    return this.http.get("http://localhost:3000/about");
  }
}
