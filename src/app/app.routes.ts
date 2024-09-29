import { Routes } from '@angular/router';
import { LandingPageComponent } from '@components/pages/landing-page/landing-page.component';
import { LoginComponent } from './components/pages/login/login.component';

export const routes: Routes = [
    // {path: '', redirectTo: 'home', pathMatch: 'full'},
    // { path: 'home', component: HomeComponent },
    {path: '', component: LandingPageComponent},
    {path: 'landing', component: LandingPageComponent},
    {path: 'login', component: LoginComponent}
];
