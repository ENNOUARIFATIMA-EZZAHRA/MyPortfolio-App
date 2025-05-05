import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component.js';
import { ContactMeComponent } from './components/contact-me/contact-me.component.js';
import { ProjectsComponent } from './components/projects/projects.component.js';
import { SkillsComponent } from './components/skills/skills.component.js';

import { AboutComponent } from './components/about/about.component.js';
import { FooterComponent } from './components/footer/footer.component.js';
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent   
  },
  {
    path: 'home',
    component: HomeComponent   
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact-me',
    component: ContactMeComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  }
];
