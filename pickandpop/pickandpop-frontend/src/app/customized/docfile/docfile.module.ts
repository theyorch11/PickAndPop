import { NgModule } from '@angular/core';
import { GeneratedDocfileModule, generatedImports, generatedDeclarations, generatedProviders, generatedEntryComponents, generatedExports } from "@generated/docfile/generated-docfile.module";

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
export class DocfileModule extends GeneratedDocfileModule{ }
