import { Injectable } from '@angular/core';
import { ITab } from '../model/tab.interface';
 
@Injectable({
  providedIn: 'root',
})
export class TabService {
  
  tabs: ITab[] = [];
  tabOptions: ITab[] = [{ name: 'Contratos', url: '/contratos/contratoslist' }, { name: 'Entidades',   url: '/entidad/entidadlist' }];
 
  constructor() {}
  
   addTab(url: string) {
	  const tab = this.getTabOptionByUrl(url);
	  this.tabs.push(tab);
   }
	 
	getTabOptionByUrl(url: string): ITab {
	  return this.tabOptions.find(tab => tab.url === url);
	}
	 
	deleteTab(index: number) {
	  this.tabs.splice(index, 1);
	}  
	
	getTabs():ITab[]{
		return this.tabs;
	}
	
	getNumTabs():number{
		return this.tabs.length;
	}
}