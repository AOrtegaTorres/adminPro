import { NgModule } from "@angular/core";
import { DashboardComponent } from "./../pages/dashboard/dashboard.component";
import { ProgressComponent } from "./../pages/progress/progress.component";
import { Graph1Component } from "./../pages/graph1/graph1.component";


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
        
    ]
})
export class PagesModule {}
