import { Routes } from '@angular/router';
import { LandingPageComponent } from '@components/pages/landing-page/landing-page.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SignUpComponent } from '@components/pages/sign-up/sign-up.component';
import { DashboardComponent } from '@pages/dashboard/dashboard.component';
import { ForYouComponent } from '@pages/dashboard/for-you/for-you.component';
import { PopularComponent } from '@pages/dashboard/popular/popular.component';
import { SavedComponent } from '@pages/dashboard/saved/saved.component';
import { NotFoundComponent } from '@components/errors/not-found/not-found.component';
import { AuthGuard } from './auth.guard'; // Importamos el guard

export const routes: Routes = [
  // {path: '', redirectTo: 'home', pathMatch: 'full'},
  // { path: 'home', component: HomeComponent },
  { path: '', component: LandingPageComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: SignUpComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', component: ForYouComponent },
      { path: 'popular', component: PopularComponent },
      { path: 'saved', component: SavedComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];
