import { NgModule } from '@angular/core';
import { GeneratedRolModule, generatedImports, generatedDeclarations, generatedProviders, generatedEntryComponents, generatedExports } from "@generated/rol/generated-rol.module";

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
export class RolModule extends GeneratedRolModule{ }
