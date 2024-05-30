import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './pages/template/template.component';
import { ReactivosComponent } from './pages/reactivos/reactivos.component';

const routes: Routes = [ 
{path :'template',component:TemplateComponent},
{path : 'reactivos', component:ReactivosComponent},
{path : '**', pathMatch:'full',redirectTo:'template'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
