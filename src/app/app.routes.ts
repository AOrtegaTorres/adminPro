
import { RouterModule, Routes } from "@angular/router";

import { PagesComponent } from './pages/pages.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graph1Component } from './pages/graph1/graph1.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';


const APP_ROUTES: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'progress',
                component: ProgressComponent
            },
            {
                path: 'graph1',
                component: Graph1Component
            },

        ]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: LoginComponent
    },
    {
        path: '**',
        component: NopagefoundComponent
    }
];

export const APP_ROUTE = RouterModule.forRoot(APP_ROUTES, { useHash: true }) 