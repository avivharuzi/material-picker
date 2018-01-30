import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SchemaComponent } from './components/schema/schema.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':schema', component: SchemaComponent },
  { path:  '', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: ErrorPageComponent },
];

const appRouter: ModuleWithProviders = RouterModule.forRoot(appRoutes);

@NgModule({
  imports: [
    appRouter
  ]
})
export class RoutingModule { }
