export declare enum ApiEnum {
    Customer = "http://localhost:5194/api/Customer/",
    Report = "http://localhost:5195/api/Report/",
    DashBoard = "http://localhost:5195/api/DashBoard/",
    Booking = "http://localhost:5196/api/Booking/",
    Security = "http://localhost:5197/api/Security/",
    User = "http://localhost:5197/api/User/",
    Role = "http://localhost:5197/api/Role/",
    Module = "http://localhost:5197/api/Module/",
    Company = "http://localhost:5198/api/Company/",
    Browser = "http://localhost:5199/api/Browser/",
    Select = "http://localhost:5199/api/Select/",
    HoliDay = "http://localhost:5199/api/HoliDay/",
    Court = "http://localhost:5199/api/Court/"
}
export declare enum NotificationTypeEnum {
    Succes = "success",
    Default = "default",
    Primary = "primary",
    Secondary = "secondary",
    Warning = "warning",
    Danger = "danger",
    Info = "info"
}
export declare enum PlacementFromEnum {
    Top = "top",
    Bottom = "bottom"
}
export declare enum PlacementAlignEnum {
    Left = "left",
    Right = "right",
    Center = "center"
}
export declare enum PaymentTypeEnum {
    None = 0,
    Cash = 1,
    Debit = 2,
    Credit = 3
}
export declare enum PaymentStatusEnum {
    None = 0,
    Pending = 1,
    Paid = 2
}
export declare enum BrowserIdEnum {
    BrowserCustomer = "BrowserCustomer"
}
export declare enum SelectIdEnum {
    ListCourt = "ListCourt",
    ListRole = "ListRole"
}
export declare enum ActionEnum {
    None = 0,
    Create = 1,
    Edit = 2,
    Detail = 3,
    Delete = 4
}
export declare enum CodeErrorEnum {
    InternalServerError = 100,
    BookingNotAvailable = 101,
    BookingNotFound = 102,
    BookingPaid = 103,
    BookingDateStartMustBeGreater = 104,
    CourtWithRecords = 201,
    CourtNotFound = 202
}
export declare enum DayEnum {
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
    Sunday = 7
}
