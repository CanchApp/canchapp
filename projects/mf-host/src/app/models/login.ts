export interface AuthCredentials {
    email: string;
    password?: string;
    tenantId?: string;
}

export interface ILoginToken {
    token: string;
    isProvisional: boolean;
    companies: ICompanyLogin[];
    roleModules: IRoleModule[];
}

export interface ICompanyLogin {
    companyName: string;
    email: string;
    idRole: number | null;
    idUser: number;
    roleName: string | null;
    tenantId: string;
    userName: string;
}

export interface IRoleModule {
    idModule: number;
    moduleName: string;
    modulePath: string;
    actions: IModuleActions[];
}

export interface IModuleActions {
    create: boolean;
    read: boolean;
    update: boolean;
    delete: boolean;
}