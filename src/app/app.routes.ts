import { Routes } from '@angular/router';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { HomeComponent } from './componentes/home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'dashboard', component: DashboardComponent },
    { path: '**', redirectTo: '' }
];
