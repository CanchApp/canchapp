import { PaymentStatusEnum, PaymentTypeEnum } from "commons-lib";
import { DetailValueCourtDTO } from "./valueCourt.interface";

export class BookingDTO {
    idBooking?: number;
    dateTimeStart: Date | string = new Date();
    dateTimeEnd: Date | string = new Date();
    idCustomer?: number;
    idCourt: number = -1;    
    paymentStatus: PaymentStatusEnum = PaymentStatusEnum.Pending;
    paymentType: PaymentTypeEnum = PaymentTypeEnum.None;
    isRecurrent: boolean = false;
    observation: string = '';
    dateCreated: string = new Date().toISOString();
    dateUpdated: string = new Date().toISOString();
    valueCourt: number = 0;
    totalValue: number = 0;
    totalHours: number = 0;
    detailValueCourt: string = '';
}