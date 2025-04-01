export class PermissionModule {
    idModule!: number;
    moduleName!: string;
    modulePath?: string;
    actions!: PermissionActions;
}

export class PermissionActions {
    create!: boolean;
    read!: boolean;
    update!: boolean;
    delete!: boolean;
}