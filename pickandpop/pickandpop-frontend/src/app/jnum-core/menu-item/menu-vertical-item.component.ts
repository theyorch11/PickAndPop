import {Component, Input, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import {NavItem} from '../navbar/nav-item';

@Component({
  selector: 'app-menu-vertical-item',
  templateUrl: './menu-vertical-item.component.html',
  styleUrls: ['./menu-vertical-item.component.css']
})
export class MenuVerticalItemComponent implements OnInit {
  @Input() items: NavItem[];
  @ViewChild('childMenu',{static:true}) public childMenu;  
  @Output() sidenavToggleEmit: EventEmitter<any> = new EventEmitter<any>();
  expandHeight = '42px';
  collapseHeight = '42px';

  constructor(public router: Router) {
  }

  ngOnInit() {
  }
  
  sidenavToggle(){
      this.sidenavToggleEmit.emit();
  }
}