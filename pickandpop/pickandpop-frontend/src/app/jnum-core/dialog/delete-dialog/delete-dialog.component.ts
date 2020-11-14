import {Component, Inject} from '@angular/core';
import { NgbActiveModal } from '@app/ng-bootstrap';


@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html'
})
export class DeleteDialogComponent {

  constructor(
  	public activeModal: NgbActiveModal
  ) {}

	closeModal(): void {
        this.activeModal.close();
    }
    
    onDelete():void{
    	this.activeModal.close(true);
    }
}
