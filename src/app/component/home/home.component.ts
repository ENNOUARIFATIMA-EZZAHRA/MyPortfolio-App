import { Component } from '@angular/core';
import { AboutComponent } from '../../components/about/about.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { ContactMeComponent } from '../../components/contact-me/contact-me.component';

@Component({
  selector: 'app-home',
  imports: [AboutComponent,SkillsComponent,ProjectsComponent,ContactMeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
