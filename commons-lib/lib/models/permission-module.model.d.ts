export declare class PermissionModule {
    idModule: number;
    moduleName: string;
    modulePath?: string;
    actions: PermissionActions;
}
export declare class PermissionActions {
    create: boolean;
    read: boolean;
    update: boolean;
    delete: boolean;
}
