import { NgModule } from '@angular/core';
import { GeneratedGrupoPermisoModule, generatedImports, generatedDeclarations, generatedProviders, generatedEntryComponents, generatedExports } from "@generated/grupopermiso/generated-grupopermiso.module";

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
export class GrupoPermisoModule extends GeneratedGrupoPermisoModule{ }
