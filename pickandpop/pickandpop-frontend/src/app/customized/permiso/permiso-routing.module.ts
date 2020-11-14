import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { GeneratedPermisoRoutingModule,permisoGeneratedRoutes } from "@generated/permiso/generated-permiso-routing.module";

export const permisoRoutes: Routes = [];

@NgModule( {
    imports: [
        RouterModule.forChild( [...permisoRoutes,...permisoGeneratedRoutes] )
    ],
    exports: [
        RouterModule
    ]
} )

export class PermisoRoutingModule extends GeneratedPermisoRoutingModule{

}