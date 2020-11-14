import { Component, Inject } from '@angular/core';
import { NgbActiveModal } from '@app/ng-bootstrap';

@Component( {
    selector: 'app-generic-dialog',
    templateUrl: './generic-dialog.component.html'
} )
export class GenericDialogComponent {

    cancelVisible:boolean=false;
    data:any;

    constructor(
    	public activeModal: NgbActiveModal
     ) {

    }

	closeModal(): void {
        this.activeModal.close();
    }

	onTrue():void{
		this.activeModal.close(true);
	}

}
