import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NavItem} from '../navbar/nav-item';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input() parentId:string;
  @Input() items: NavItem[];
  @ViewChild('childMenu',{static:true}) public childMenu;  

  constructor(public router: Router) {
  }

  ngOnInit() {
  }
}