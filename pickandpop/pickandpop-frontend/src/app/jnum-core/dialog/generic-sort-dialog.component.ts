import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { SortField } from '../model/sortfield.interface';
import { NgbActiveModal } from '@app/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

export interface SortData {
  camposdisponibles: SortField[];
  camposasignados: SortField[];
  direction:string;
}

@Component({
  selector: 'app-delete-dialog',
  styleUrls: ["generic-sort-dialog.css"],
  templateUrl: './generic-sort-dialog.component.html'
})
export class GenericSortDialogComponent implements OnInit{

  public data: SortData;
  camposdisponibles: SortField[]=[];
  camposasignados: SortField[]=[];    
  sortForm: FormGroup;

  constructor(
    public fb: FormBuilder, 
    public activeModal: NgbActiveModal
  ) {
  }

  ngOnInit(): void {
    this.camposdisponibles = this.data.camposdisponibles;
    this.camposasignados = this.data.camposasignados;
    this.sortForm = this.fb.group( {
      'direction': new FormControl( this.data.direction?this.data.direction:"asc", [] ),
} );    
  }


  
  get direction() { return this.sortForm.get( 'direction' ); }

  onSubmit(): void {
    this.data.direction = this.direction.value;
    this.activeModal.close();
  }

  clearSort():void{   
    this.camposasignados=[];
    this.data.camposasignados = [];
  }

  drop(event: CdkDragDrop<SortField[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}