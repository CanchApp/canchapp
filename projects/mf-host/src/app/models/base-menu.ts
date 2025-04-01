import { ModulesEnum } from "commons-lib";

export interface MenuItem {
    namei18n: string;
    modules: ModulesEnum[];
    icon: string;
    route: string;
    subMenu?: MenuItem[];
}