import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { GeneratedUserRoutingModule,userGeneratedRoutes } from "@generated/user/generated-user-routing.module";

export const userRoutes: Routes = [];

@NgModule( {
    imports: [
        RouterModule.forChild( [...userRoutes,...userGeneratedRoutes] )
    ],
    exports: [
        RouterModule
    ]
} )

export class UserRoutingModule extends GeneratedUserRoutingModule{

}