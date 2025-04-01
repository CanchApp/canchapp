export class RoleDTO {
    idRole!: number;
    name!: string;

    static transformToSelectDto(data: RoleDTO[]): { id: string, text: string }[] {
        return data.map(e => ({
            id: e.idRole.toString(),
            text: e.name
        }));
    }
}

export class RoleItemDTO {
    idRole?: number;
    name!: string;
    roleModules?: RoleModulesDTO[];
}

export class RoleModulesDTO {
    idModule!: number;
    moduleName!: string;
    modulePath?: string;
    actions!: {
        create: boolean;
        read: boolean;
        update: boolean;
        delete: boolean;
    }
}