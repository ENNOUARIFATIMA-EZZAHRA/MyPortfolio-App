import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from '../../http.service';
import { Product } from '../../model/product';
import { ProjectCardComponent } from '../../component/project-card/project-card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Product[] = [];
  private httpService = inject(HttpService);

  ngOnInit(): void {
    this.loadProjects();
  }

  private loadProjects(): void {
    this.httpService.getProjects().subscribe({
      next: (projects: Product[]) => {
        this.projects = projects;
        console.log('Projects loaded', projects);
      },
      error: (err: Error) => console.error('Error loading projects', err)
    });
  }
}