import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { HttpService } from '../../http.service';
import { Product } from '../../model/product';
import { ProjectCardComponent }  from '../../component/project-card/project-card.component'; 

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent], 
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Product[] = [];
  httpService = inject(HttpService);

  ngOnInit() {
    this.httpService.getProjects().subscribe((result) => {
      this.projects = result;
      console.log(this.projects);
    });
  }
}
