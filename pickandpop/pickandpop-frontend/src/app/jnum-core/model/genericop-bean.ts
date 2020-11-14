import { GenericBean } from "@app/jnum-core/model/generic-bean";

export class GenericopBean<T extends GenericBean,U extends GenericBean> {
    listEntities:T[]=[];
    form: U;
}