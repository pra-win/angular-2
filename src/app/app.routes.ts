import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { loginForm } from './login/login.form.component';
import { DashboardLanding } from './dashboard/dashboard.landing.component';
import { Spendings } from './spendings/spendings.component';
import { categorys } from './categorys/category.component';

const routes:Routes = [
    {path:'', redirectTo:'login', pathMatch: 'full'},
    {path:'login',component: loginForm},
    {path: 'dashboard', component: DashboardLanding},
    {path: 'spendings', component: Spendings},
    {path: 'categories', component: categorys}
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes),
        HttpModule
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{}
export const routingComponents = [
    loginForm,
    DashboardLanding,
    Spendings,
    categorys
]

