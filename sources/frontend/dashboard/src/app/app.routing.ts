import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { ProfileComponent } from './profile/profile.component';

const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent },    
    { path: 'signin', component: SigninComponent },    
    { path: 'profile', component: ProfileComponent },    
    { path: 'home', component: HomeComponent },    
    { path: '', component: LoginComponent }    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);