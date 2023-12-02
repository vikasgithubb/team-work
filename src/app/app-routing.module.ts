import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [{path: 'demo', component: DemoComponent},
{path: 'home', component: HomepageComponent},
{path: '', redirectTo: '/home', pathMatch: 'full'} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }