import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { pairwise } from 'rxjs/operators';
import { TabService } from './tab.service';

@Injectable()
export class NavigationService {

    private history = [];

    constructor( private router: Router) {
    }

    public loadRouting(): void {
        this.router.events
            .pipe( filter( event => event instanceof NavigationEnd ) )
            .subscribe(( { urlAfterRedirects }: NavigationEnd ) => {
                if(localStorage.getItem('record')){
                    localStorage.removeItem('record');
                    this.history.pop();
                }
                if(urlAfterRedirects!=this.history[this.history.length-1]){                	
                    this.history = [...this.history, urlAfterRedirects];
                }
            } );
    }

    
    
    public getHistory(): string[] {
        return this.history;
    }
    
    public clearHistory(){
        this.history=[];
    }

    public getPreviousUrl(): string {
        const previous = this.history[this.history.length - 2] || '/login';
        this.history.pop();
        return previous;
    }
}
