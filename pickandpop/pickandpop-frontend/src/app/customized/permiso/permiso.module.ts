import { NgModule } from '@angular/core';
import { GeneratedPermisoModule, generatedImports, generatedDeclarations, generatedProviders, generatedEntryComponents, generatedExports } from "@generated/permiso/generated-permiso.module";

const customizedImports = []
const customizedDeclarations = []
     
const customizedProviders = []

const customizedEntryComponents = []

const customizedExports = []

@NgModule( {
    imports: [...customizedImports,...generatedImports],
    declarations: [...customizedDeclarations,...generatedDeclarations],
    providers: [...customizedProviders,...generatedProviders],
    entryComponents: [...customizedEntryComponents,...generatedEntryComponents],
    exports: [...customizedExports,...generatedExports]
} )
export class PermisoModule extends GeneratedPermisoModule{ }
