import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent, 
    pathMatch: 'full',
    data: { 
      title: 'Accueil',
      animation: 'homePage' 
    }
  },
  { 
    path: 'about', 
    component: AboutComponent,
    data: { 
      title: 'À propos',
      animation: 'aboutPage'
    }
  },
  { 
    path: 'skills', 
    component: SkillsComponent,
    data: { 
      title: 'Compétences',
      animation: 'skillsPage'
    }
  },
  { 
    path: 'projects', 
    component: ProjectsComponent,
    data: { 
      title: 'Projets',
      animation: 'projectsPage'
    }
  },
  { 
    path: 'contact', 
    component: ContactMeComponent,
    data: { 
      title: 'Contact',
      animation: 'contactPage'
    }
  },
  { 
    path: '**', 
    redirectTo: '',
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // Correction de l'option
      enableTracing: false // À activer en dev pour déboguer le routing
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }