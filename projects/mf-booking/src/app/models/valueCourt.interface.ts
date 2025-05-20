export interface ValueCourtDTO {
    total: number;
    totalHours: number;
    valueCourt: number;
    detailValueCourt: DetailValueCourtDTO[];
}

export interface DetailValueCourtDTO {
    timeStart: string;
    timeEnd: string;
    value: number;
}