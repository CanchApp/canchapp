export interface CompanyDTO {
    idCompany: number,
    name: string,
    direction: string,
    email?: string,
    phoneArray: PhoneDTO[],
    phones: string,
    allowedUsers: number,
    allowedCourt: number
    isSpecificValueHours: boolean;
}

export interface PhoneDTO {
    number: string;
}