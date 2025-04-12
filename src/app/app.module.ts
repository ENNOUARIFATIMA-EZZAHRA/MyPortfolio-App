import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';  // Importer le module de routing
import { HeaderComponent } from './header/header.component';  // Assurez-vous que ce composant existe
import { HomeComponent } from './home/home.component';  // Assurez-vous que ce composant existe
import { FooterComponent } from './footer/footer.component';  // Assurez-vous que ce composant existe

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,  
    HomeComponent, 
    FooterComponent 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule  // Ajouter le module de routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
