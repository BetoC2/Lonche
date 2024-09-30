import { Routes } from '@angular/router';
import { LandingPageComponent } from '@components/pages/landing-page/landing-page.component';
import { LoginComponent } from './components/pages/login/login.component';
import { DashboardComponent } from '@pages/dashboard/dashboard.component';
import { ForYouComponent } from '@pages/dashboard/for-you/for-you.component';
import { PopularComponent } from '@pages/dashboard/popular/popular.component';
import { SavedComponent } from '@pages/dashboard/saved/saved.component';

export const routes: Routes = [
    // {path: '', redirectTo: 'home', pathMatch: 'full'},
    // { path: 'home', component: HomeComponent },
    { path: '', component: LandingPageComponent },
    { path: 'login', component: LoginComponent },
    {
        path: 'dashboard', component: DashboardComponent, children: [
            { path: '', component: ForYouComponent },
            { path: 'popular', component: PopularComponent },
            { path: 'saved', component: SavedComponent }
        ]
    }
];
