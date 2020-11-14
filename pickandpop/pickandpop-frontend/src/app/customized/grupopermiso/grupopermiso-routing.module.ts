import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { GeneratedGrupoPermisoRoutingModule,grupopermisoGeneratedRoutes } from "@generated/grupopermiso/generated-grupopermiso-routing.module";

export const grupopermisoRoutes: Routes = [];

@NgModule( {
    imports: [
        RouterModule.forChild( [...grupopermisoRoutes,...grupopermisoGeneratedRoutes] )
    ],
    exports: [
        RouterModule
    ]
} )

export class GrupoPermisoRoutingModule extends GeneratedGrupoPermisoRoutingModule{

}