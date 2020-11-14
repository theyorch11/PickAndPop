import { NgModule } from '@angular/core';
import { GeneratedUserModule, generatedImports, generatedDeclarations, generatedProviders, generatedEntryComponents, generatedExports } from "@generated/user/generated-user.module";

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
export class UserModule extends GeneratedUserModule{ }
