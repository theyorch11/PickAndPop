import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { GeneratedDocfileRoutingModule,docfileGeneratedRoutes } from "@generated/docfile/generated-docfile-routing.module";

export const docfileRoutes: Routes = [];

@NgModule( {
    imports: [
        RouterModule.forChild( [...docfileRoutes,...docfileGeneratedRoutes] )
    ],
    exports: [
        RouterModule
    ]
} )

export class DocfileRoutingModule extends GeneratedDocfileRoutingModule{

}