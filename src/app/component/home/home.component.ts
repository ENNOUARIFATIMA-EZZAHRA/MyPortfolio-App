import { Component, inject } from '@angular/core';
import { AboutComponent } from '../../components/about/about.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { ContactMeComponent } from '../../components/contact-me/contact-me.component';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-home',
  imports: [AboutComponent,SkillsComponent,ProjectsComponent,ContactMeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
httpService = inject(HttpService);
info:any;
ngOnInit(){
  this.httpService.getAboutInfo().subscribe(result =>{
    this .info = result;
    console.log(this.info);
  });
}
}






