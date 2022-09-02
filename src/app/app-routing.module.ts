import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailRoutingModule } from './content/pages/detail/detail-routing.module';
import { HomeRoutingModule } from './content/pages/home/home-routing.module';
import { PageNotFoundComponent } from './content/shared/components';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
        HomeRoutingModule,
        DetailRoutingModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
