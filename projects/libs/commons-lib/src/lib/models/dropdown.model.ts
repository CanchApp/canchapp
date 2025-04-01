import { ActionEnum } from "../enum/commons.enum";

export class DropdownItemModel {
    id!: number;
    name!: string;
    disabled!: boolean;
    action!: ActionEnum;
}