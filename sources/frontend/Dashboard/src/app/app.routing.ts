import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TasksComponent } from './tasks/tasks.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const APP_ROUTES: Routes = [
	{ path: '', component: LoginComponent},
	{ path: 'login', component: LoginComponent},
	{ path: 'tasks', component: TasksComponent},
	{ path: 'dashboard', component: DashboardComponent},
	{ path: '**', component: LoginComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);