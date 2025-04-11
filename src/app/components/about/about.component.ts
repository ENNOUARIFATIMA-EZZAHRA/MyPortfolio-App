import { Component, inject } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  info: any;
  aboutMe: any;
  HttpService = inject(HttpService);
  ngOnInit(){
    this.HttpService.getAboutInfo().subscribe((result)=>{
      this.info= result;
    });
  }
}






