import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HasPermissionDirective } from './directives/has-permission.directive';
import { ShowErrorsComponent } from './show-errors/show-errors.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DialogPasswordComponent } from './password/dialog-password.component';
import { RegisterComponent } from './register/register.component';
import { ToastComponent } from './util/toast/toast.component';
import { GenericDialogComponent } from '@jnum-core/dialog/generic-dialog.component';
import { GenericSortDialogComponent } from '@jnum-core/dialog/generic-sort-dialog.component';
import { DeleteDialogComponent } from './dialog/delete-dialog/delete-dialog.component';
import { PropselectSearchDialogComponent } from './dialog/propselect-search-dialog/propselect-search-dialog.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { UserService } from "../customized/user/service/user.service";
import { DocfileService } from "../customized/docfile/service/docfile.service";
import { CustomDateAdapter, CustomDateParserFormatter } from './adapters/datepicker-adapter';
import { NgbDateAdapter, NgbDateParserFormatter, NgbActiveModal } from '@app/ng-bootstrap';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NavbarVerticalComponent } from "@app/jnum-core/navbar/navbar-vertical.component";
import { MenuVerticalItemComponent } from "@app/jnum-core/menu-item/menu-vertical-item.component";
import { ModalComponent } from './component/modal-component';
import { AngularDraggableModule } from 'angular2-draggable';
import { NgbModule } from '@app/ng-bootstrap';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTreeModule } from '@angular/material/tree';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        FormsModule,
        NgbModule,
        ReactiveFormsModule,
        RouterModule,
        DragDropModule,
        ScrollingModule,
        AngularDraggableModule,
        MatTableModule,
        MatTreeModule,
        MatFormFieldModule,
        MatSelectModule,
        MatPaginatorModule,
        MatIconModule,
        MatCheckboxModule,
        MatDialogModule,
        MatRadioModule,
        MatInputModule,
        MatToolbarModule,
        MatCardModule,
        MatSortModule
    ],
    declarations: [
        ShowErrorsComponent,
        HomeComponent,
        LoginComponent,
        DialogPasswordComponent,
        RegisterComponent,
        ToastComponent,
        GenericDialogComponent,
        GenericSortDialogComponent,
        DeleteDialogComponent,
        ModalComponent,
        PropselectSearchDialogComponent,
        BreadcrumbComponent,
        NavbarComponent,
        NavbarVerticalComponent,
        MenuItemComponent,
        MenuVerticalItemComponent,
        HasPermissionDirective
    ],
    providers: [
        DocfileService,
        NgbActiveModal,
        { provide: NgbDateAdapter, useClass: CustomDateAdapter },
        { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter },
        UserService
    ],
    entryComponents: [
        ToastComponent,
        GenericDialogComponent,
        GenericSortDialogComponent,
        DeleteDialogComponent,
        ModalComponent,
        PropselectSearchDialogComponent,
        DialogPasswordComponent,
    ],
    exports: [
        ShowErrorsComponent,
        HomeComponent,
        LoginComponent,
        DialogPasswordComponent,
        RegisterComponent,
        ToastComponent,
        DeleteDialogComponent,
        ModalComponent,
        PropselectSearchDialogComponent,
        BreadcrumbComponent,
        NavbarComponent,
        NavbarVerticalComponent,
        MenuItemComponent,
        MenuVerticalItemComponent,
        NgbModule,
        DragDropModule,
        HasPermissionDirective,
        ScrollingModule,
        MatTableModule,
        MatTreeModule,
        MatFormFieldModule,
        MatSelectModule,
        MatPaginatorModule,
        MatIconModule,
        MatCheckboxModule,
        MatDialogModule,
        MatRadioModule,
        MatInputModule,
        MatToolbarModule,
        MatCardModule,
        MatSortModule
    ]
})
export class JnumCoreModule { }
