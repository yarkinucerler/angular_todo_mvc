/* Vendor Module Begin */
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
/* Vendor Module End */

/* Component Begin */
import {HomeComponent} from "./pages/home/home.component";
/* Component End */

const routes: Routes = [
    {path: '', component: HomeComponent, data: { pageTitle: 'Welcome'}}
];

@NgModule({
    imports: [
        RouterModule.forRoot (
            routes,
            {
                useHash: true,
                //enableTracing: true,
                preloadingStrategy: PreloadAllModules
            }
        )
    ],
    exports: [
        RouterModule
    ],
    providers: [

    ]
})
export class AppRoutingModule { }
