import { Output, EventEmitter, OnInit } from "@angular/core";
import { SelectionModel } from "@angular/cdk/collections";
import { TableSelected } from "@app/jnum-core/component/table-selected";
import { GenericBean } from "@app/jnum-core/model/generic-bean";

export abstract class GenericPresentationComponent<T extends GenericBean> implements OnInit {
    ngOnInit(): void {
    }

    @Output() pdf: EventEmitter<any> = new EventEmitter<any>();
    @Output() excel: EventEmitter<any> = new EventEmitter<any>();
    tableSelected: TableSelected<T>[] = [];
    dataSourceTable;
    page = 0;
    public data: any;
    candoAdd=true
    candoEdit=true;
	candoDelete=true


    constructor() { }

    public getCellClass(entity: T): string {
        return "blackcell";
    }

    generarPdf() {
        this.pdf.emit();
    }
    generarExcel() {
        this.excel.emit();
    }

    isAllSelected() {
        if (!this.tableSelected[this.page]) {
            let tableSelected = new TableSelected<T>();
            tableSelected.page = this.page;
            tableSelected.selectedEntities = [];
            this.tableSelected.push(tableSelected);
        }
        const numSelected = this.tableSelected[this.page].selectedEntities.length;
        const numRows = this.dataSourceTable.length;
        return numSelected === numRows;
    }

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        if ( this.isAllSelected() ) {
            this.tableSelected[this.page].selectionEntities.clear();
            this.tableSelected[this.page].selectedEntities = [];
        } else {
            this.dataSourceTable.forEach( row => this.tableSelected[this.page].selectionEntities.select( row ) );
            this.tableSelected[this.page].selectedEntities=this.dataSourceTable;            
        }
    }

    hasValuesSelectionEntities(): boolean {
        if ( this.tableSelected[this.page] ) {
            return this.tableSelected[this.page].selectionEntities.hasValue();
        }
        return false;
    }

    toggleSelection( row: T ) {
        if ( !this.tableSelected[this.page] ) {
            let tableSelected = new TableSelected<T>();
            tableSelected.page = this.page;
            tableSelected.selectedEntities = [];
            this.tableSelected.push( tableSelected );
        }
        if ( this.tableSelected[this.page].selectedEntities.some(( el ) => el.id == row.id ) ) {
            this.tableSelected[this.page].selectedEntities = this.tableSelected[this.page].selectedEntities.filter(( el ) => el.id != row.id );
        } else {
            this.tableSelected[this.page].selectedEntities.push( row );
        }
        this.tableSelected[this.page].selectionEntities.toggle( row );
    }

    checkedSelected( row: T ): boolean {
        if ( this.tableSelected[this.page] ) {
            return this.tableSelected[this.page].selectedEntities.some( item => item.id === row.id );
        }
        return false
    }

    getListToSend(): Array<T> {
        let listToSend = new Array<T>();
        for ( let table of this.tableSelected ) {
            for ( let selectedElement of table.selectedEntities ) {
                listToSend.push( selectedElement );
            }
        }
        return listToSend;
    }

}