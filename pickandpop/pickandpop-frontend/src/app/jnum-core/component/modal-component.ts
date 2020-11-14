import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ViewContainerRef,
  ComponentRef,
  Output
} from '@angular/core'
import { NgbActiveModal } from '@app/ng-bootstrap';
import { UtilService } from '../services/util.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import * as $ from 'jquery';
import 'jqueryui';


@Component({
  selector: 'app-modal-component',
  templateUrl: './modal.component.html'
})
export class ModalComponent implements OnInit, OnDestroy {
  @ViewChild('container', { read: ViewContainerRef, static: true }) container
  componentRef: ComponentRef<any>
  public data: any;
  @Output() onSubmitSubject: Subject<boolean> = new Subject<boolean>();

  constructor(
    public activeModal: NgbActiveModal,
    private router: Router,
    public utilService: UtilService,
    public tanslate:TranslateService
  ) { }

  ngOnInit() {
    $(document).ready(function(){
      let modalContent: any = $('.modal-content');
      let modalHeader = $('.modal-header');
      modalHeader.addClass('cursor-all-scroll');
      modalContent.draggable({
          handle: '.modal-header'
      });
    });
    this.router.navigate([{ outlets: { popup: this.data.url } }])
    this.utilService.setPop(true);
  }


  closeModal() {
    this.utilService.setPop(false);
    this.activeModal.close();
    this.onSubmitSubject.next(true);
  }

  ngOnDestroy() {
    this.utilService.setPop(false);
    this.onSubmitSubject.next(true);
  }
}
