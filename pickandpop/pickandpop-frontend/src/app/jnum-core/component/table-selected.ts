import { GenericBean } from "@app/jnum-core/model/generic-bean";
import { SelectionModel } from "@angular/cdk/collections";

export class TableSelected<T extends GenericBean>{
    page: number;
    selectedEntities: T[] = [];
    selectionEntities = new SelectionModel<T>( true, [] );
}