export class UserDTO {
    idUser!: number;
    name!: string;
    phone?: string;
    email!: string;
    roleId!: number | string;
    roleName?: string;
    isActive!: boolean;
    isAdmin!: boolean;
}

export class CreateUserDTO {
    name!: string;
    phone!: string;
    email!: string;
    password!: string;
    RoleId!: number;
}

export class UpdateUserDTO {
    idUser!: number;
    name!: string;
    isActive!: boolean;
    newUserRoleId!: number;
}