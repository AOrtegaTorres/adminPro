import { NgModule } from "@angular/core";
import { DashboardComponent } from "./../pages/dashboard/dashboard.component";
import { ProgressComponent } from "./../pages/progress/progress.component";
import { Graph1Component } from "./../pages/graph1/graph1.component";
import { ROUTES_PAGES } from './pages.routes';


@NgModule({
    declarations: [
        DashboardComponent, 
        ProgressComponent, 
        Graph1Component
    ],
    exports: [
        DashboardComponent, 
        ProgressComponent, 
        Graph1Component
    ],
    imports: [
        ROUTES_PAGES
    ]
})
export class PagesModule {}
