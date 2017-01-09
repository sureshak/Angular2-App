import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {CreateComponent} from './create/create.component';
import {DeleteComponent} from './delete/delete.component';
import {ListComponent} from './list/list.component';
import {UpdateComponent} from './update/update.component';



export const router:Routes=[
{path:'',redirectTo:'home',pathMatch:'full'},
{path:'create',component:CreateComponent},
{path:'delete',component:DeleteComponent},
{path:'list',component:ListComponent},
{path:'update',component:UpdateComponent},
{path:'home',component:HomeComponent}
];
export const routes:ModuleWithProviders=RouterModule.forRoot(router);

