import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { GeneratedRolRoutingModule,rolGeneratedRoutes } from "@generated/rol/generated-rol-routing.module";

export const rolRoutes: Routes = [];

@NgModule( {
    imports: [
        RouterModule.forChild( [...rolRoutes,...rolGeneratedRoutes] )
    ],
    exports: [
        RouterModule
    ]
} )

export class RolRoutingModule extends GeneratedRolRoutingModule{

}