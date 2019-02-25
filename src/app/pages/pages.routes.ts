import { Routes, RouterModule } from "@angular/router";
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graph1Component } from './graph1/graph1.component';


const PAGES_ROUTES: Routes = [
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
    }
]

export const ROUTES_PAGES = RouterModule.forChild(PAGES_ROUTES);