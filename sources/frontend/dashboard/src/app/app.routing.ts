import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

// Constante com valores das rotas e seus respectivos componentes
const APP_ROUTES: Routes = [
    {path: 'login', component:LoginComponent}
];

// Contem a definicao das rotas do projeto
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);