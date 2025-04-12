import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';  // Assurez-vous que le chemin est correct

const routes: Routes = [
  { path: '', component: HomeComponent },  // Route par défaut, home page
  // Ajouter d'autres routes ici si tu veux
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Configurer le routage
  exports: [RouterModule]  // Exporter le module pour l'utiliser dans l'application
})
export class AppRoutingModule { }
