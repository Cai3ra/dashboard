import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    }
]

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);


