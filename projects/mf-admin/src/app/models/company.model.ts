export interface CompanyDTO {
    idCompany: number,
    idCity: number,
    name: string,
    direction: string,
    email?: string,
    phoneArray: PhoneDTO[],
    phones: string,
    allowedUsers: number,
    allowedCourt: number,
    isSpecificValueHours: boolean,    
    latitude: number,
    longitude: number,
}

export interface PhoneDTO {
    number: string;
}