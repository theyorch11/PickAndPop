import { Injectable, Inject,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { GenericBean } from '../model/generic-bean';
import { Router } from '@angular/router';
import { ValidationFormService } from '../services/validation-form.service';
import { NavigationService } from '../services/navigation.service';
import { BaseService } from '../services/base.service';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { NgbActiveModal } from '@app/ng-bootstrap';
import { GenericFilter } from "../filter/generic-filter";
import { PaginationPage } from "../util/pagination";
import { UtilService } from '../services/util.service';

export abstract class GenericComponent<T extends GenericBean> implements OnInit{
    pop: boolean;
    newEntity: T;
    entity: T;
    public data:any

    protected abstract initComponent(entity: T);

    constructor(
        protected validationFormService: ValidationFormService,
        protected navigationService: NavigationService,
        protected router: Router,
        protected baseService: BaseService<T>,
        protected activeModal: NgbActiveModal,
        protected utilService:UtilService,
        protected goTo: String,
        protected nombreEntidad: String,
    ) {
    }
    
    ngOnInit() {
        this.pop = (this.data && this.data.pop) ? this.data.pop : false;
        if (this.data && this.data.entity) {
            this.getEntity(this.data.entity.id);
        }    
    }

    onSubmit(form: FormGroup, entity: T) {
        if (form.valid) {
            this.addEntity(form, entity);
        } else {
            this.validationFormService.validateAllFormFields(form);
        }
    }
    
  
    onSubmitUpdate(form: FormGroup) {
        if (form.valid) {
            this.updateEntity(form);
        } else {
            this.validationFormService.validateAllFormFields(form);
        }
    }

    addEntityToParent(form: FormGroup): Observable<T> {
        if (form.valid) {
            this.newEntity = form.getRawValue();
            return this.baseService.addEntity(this.newEntity);
        } else {
            this.validationFormService.validateAllFormFields(form);
        }
    }


    addEntity(form: FormGroup, entity: T): void {
        this.entity = form.getRawValue();
        this.baseService.addEntity(this.entity)
            .subscribe(entityAdd => {
                if (entityAdd) {
                    localStorage.setItem('record', 'no');
                    if (this.pop) {               
                        this.activeModal.close(entityAdd);
                    } else {
                        if(this.utilService.isPop()){
							this.router.navigate([{ outlets: { popup: 'modal'+this.nombreEntidad+'edit/'+entityAdd.id }}])
						}else{
                        	this.router.navigateByUrl('/' + this.goTo + '/' + entityAdd.id);
                        }
                        localStorage.setItem('editbreadcrumb', 'yes');
                    }
                }
            }
            );
    }

    updateEntity(form: FormGroup): void {
        this.entity = form.getRawValue();
        
        this.baseService.updateEntity(this.entity)
            .subscribe(_ => {
                if (this.pop) {
                	this.activeModal.close(this.entity);
                } else {
                    this.getEntity(this.entity.id);
                }
            });
    }

    getEntity( id: string ): Observable<T> {
        return this.baseService.getEntity( id );
    }


    goToPrevious() {
        localStorage.setItem('goback', 'yes');
        if (this.pop) {
        	this.activeModal.close();            
        } else {
            this.router.navigateByUrl(this.navigationService.getPreviousUrl());
        }
    }

}
