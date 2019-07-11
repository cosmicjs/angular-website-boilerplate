import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './../components/home/home.component'
import { ServicesComponent } from './../components/services/services.component'
import { PortfolioComponent } from './../components/portfolio/portfolio.component'
import { AboutComponent } from './../components/about/about.component'
import { ContactComponent } from './../components/contact/contact.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
