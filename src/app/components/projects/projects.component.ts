import { Component } from '@angular/core';
import { ProjectCardComponent } from '../../component/project-card/project-card.component';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
projects :any[]=[];
httpService= inject(httpService);
ngOnInit(){
  
}
}
