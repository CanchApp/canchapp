export var ApiEnum;
(function (ApiEnum) {
    ApiEnum["Customer"] = "http://localhost:5194/api/Customer/";
    ApiEnum["Report"] = "http://localhost:5195/api/Report/";
    ApiEnum["DashBoard"] = "http://localhost:5195/api/DashBoard/";
    ApiEnum["Booking"] = "http://localhost:5196/api/Booking/";
    ApiEnum["Security"] = "http://localhost:5197/api/Security/";
    ApiEnum["Company"] = "http://localhost:5198/api/Company/";
    ApiEnum["Browser"] = "http://localhost:5199/api/Browser/";
    ApiEnum["Select"] = "http://localhost:5199/api/Select/";
    ApiEnum["HoliDay"] = "http://localhost:5199/api/HoliDay/";
    ApiEnum["Court"] = "http://localhost:5199/api/Court/";
})(ApiEnum || (ApiEnum = {}));
export var NotificationTypeEnum;
(function (NotificationTypeEnum) {
    NotificationTypeEnum["Succes"] = "success";
    NotificationTypeEnum["Default"] = "default";
    NotificationTypeEnum["Primary"] = "primary";
    NotificationTypeEnum["Secondary"] = "secondary";
    NotificationTypeEnum["Warning"] = "warning";
    NotificationTypeEnum["Danger"] = "danger";
    NotificationTypeEnum["Info"] = "info";
})(NotificationTypeEnum || (NotificationTypeEnum = {}));
export var PlacementFromEnum;
(function (PlacementFromEnum) {
    PlacementFromEnum["Top"] = "top";
    PlacementFromEnum["Bottom"] = "bottom";
})(PlacementFromEnum || (PlacementFromEnum = {}));
export var PlacementAlignEnum;
(function (PlacementAlignEnum) {
    PlacementAlignEnum["Left"] = "left";
    PlacementAlignEnum["Right"] = "right";
    PlacementAlignEnum["Center"] = "center";
})(PlacementAlignEnum || (PlacementAlignEnum = {}));
export var PaymentTypeEnum;
(function (PaymentTypeEnum) {
    PaymentTypeEnum[PaymentTypeEnum["None"] = 0] = "None";
    PaymentTypeEnum[PaymentTypeEnum["Cash"] = 1] = "Cash";
    PaymentTypeEnum[PaymentTypeEnum["Debit"] = 2] = "Debit";
    PaymentTypeEnum[PaymentTypeEnum["Credit"] = 3] = "Credit";
})(PaymentTypeEnum || (PaymentTypeEnum = {}));
export var PaymentStatusEnum;
(function (PaymentStatusEnum) {
    PaymentStatusEnum[PaymentStatusEnum["None"] = 0] = "None";
    PaymentStatusEnum[PaymentStatusEnum["Pending"] = 1] = "Pending";
    PaymentStatusEnum[PaymentStatusEnum["Paid"] = 2] = "Paid";
})(PaymentStatusEnum || (PaymentStatusEnum = {}));
export var BrowserIdEnum;
(function (BrowserIdEnum) {
    BrowserIdEnum["BrowserCustomer"] = "BrowserCustomer";
})(BrowserIdEnum || (BrowserIdEnum = {}));
export var SelectIdEnum;
(function (SelectIdEnum) {
    SelectIdEnum["ListCourt"] = "ListCourt";
})(SelectIdEnum || (SelectIdEnum = {}));
export var ActionEnum;
(function (ActionEnum) {
    ActionEnum[ActionEnum["None"] = 0] = "None";
    ActionEnum[ActionEnum["Create"] = 1] = "Create";
    ActionEnum[ActionEnum["Edit"] = 2] = "Edit";
    ActionEnum[ActionEnum["Detail"] = 3] = "Detail";
    ActionEnum[ActionEnum["Delete"] = 4] = "Delete";
})(ActionEnum || (ActionEnum = {}));
export var CodeErrorEnum;
(function (CodeErrorEnum) {
    /* Error general  */
    CodeErrorEnum[CodeErrorEnum["InternalServerError"] = 100] = "InternalServerError";
    /* Error Reservas  */
    CodeErrorEnum[CodeErrorEnum["BookingNotAvailable"] = 101] = "BookingNotAvailable";
    CodeErrorEnum[CodeErrorEnum["BookingNotFound"] = 102] = "BookingNotFound";
    CodeErrorEnum[CodeErrorEnum["BookingPaid"] = 103] = "BookingPaid";
    CodeErrorEnum[CodeErrorEnum["BookingDateStartMustBeGreater"] = 104] = "BookingDateStartMustBeGreater";
    /* Error Canchas  */
    CodeErrorEnum[CodeErrorEnum["CourtWithRecords"] = 201] = "CourtWithRecords";
    CodeErrorEnum[CodeErrorEnum["CourtNotFound"] = 202] = "CourtNotFound";
})(CodeErrorEnum || (CodeErrorEnum = {}));
export var DayEnum;
(function (DayEnum) {
    DayEnum[DayEnum["Monday"] = 1] = "Monday";
    DayEnum[DayEnum["Tuesday"] = 2] = "Tuesday";
    DayEnum[DayEnum["Wednesday"] = 3] = "Wednesday";
    DayEnum[DayEnum["Thursday"] = 4] = "Thursday";
    DayEnum[DayEnum["Friday"] = 5] = "Friday";
    DayEnum[DayEnum["Saturday"] = 6] = "Saturday";
    DayEnum[DayEnum["Sunday"] = 7] = "Sunday";
})(DayEnum || (DayEnum = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9ucy5lbnVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicy9jb21tb25zLWxpYi9zcmMvbGliL2VudW0vY29tbW9ucy5lbnVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBTixJQUFZLE9BV1g7QUFYRCxXQUFZLE9BQU87SUFDZiwyREFBZ0QsQ0FBQTtJQUNoRCx1REFBNEMsQ0FBQTtJQUM1Qyw2REFBa0QsQ0FBQTtJQUNsRCx5REFBOEMsQ0FBQTtJQUM5QywyREFBZ0QsQ0FBQTtJQUNoRCx5REFBOEMsQ0FBQTtJQUM5Qyx5REFBOEMsQ0FBQTtJQUM5Qyx1REFBNEMsQ0FBQTtJQUM1Qyx5REFBOEMsQ0FBQTtJQUM5QyxxREFBMEMsQ0FBQTtBQUM5QyxDQUFDLEVBWFcsT0FBTyxLQUFQLE9BQU8sUUFXbEI7QUFDRCxNQUFNLENBQU4sSUFBWSxvQkFRWDtBQVJELFdBQVksb0JBQW9CO0lBQy9CLDBDQUFrQixDQUFBO0lBQ2YsMkNBQW1CLENBQUE7SUFDbkIsMkNBQW1CLENBQUE7SUFDbkIsK0NBQXVCLENBQUE7SUFDdkIsMkNBQW1CLENBQUE7SUFDbkIseUNBQWlCLENBQUE7SUFDcEIscUNBQWEsQ0FBQTtBQUNkLENBQUMsRUFSVyxvQkFBb0IsS0FBcEIsb0JBQW9CLFFBUS9CO0FBQ0QsTUFBTSxDQUFOLElBQVksaUJBR1g7QUFIRCxXQUFZLGlCQUFpQjtJQUM1QixnQ0FBVyxDQUFBO0lBQ1gsc0NBQWlCLENBQUE7QUFDbEIsQ0FBQyxFQUhXLGlCQUFpQixLQUFqQixpQkFBaUIsUUFHNUI7QUFDRCxNQUFNLENBQU4sSUFBWSxrQkFJWDtBQUpELFdBQVksa0JBQWtCO0lBQzdCLG1DQUFhLENBQUE7SUFDYixxQ0FBZSxDQUFBO0lBQ1osdUNBQWlCLENBQUE7QUFDckIsQ0FBQyxFQUpXLGtCQUFrQixLQUFsQixrQkFBa0IsUUFJN0I7QUFDRCxNQUFNLENBQU4sSUFBWSxlQUtYO0FBTEQsV0FBWSxlQUFlO0lBQ3ZCLHFEQUFRLENBQUE7SUFDWCxxREFBUSxDQUFBO0lBQ1IsdURBQVMsQ0FBQTtJQUNOLHlEQUFVLENBQUE7QUFDZCxDQUFDLEVBTFcsZUFBZSxLQUFmLGVBQWUsUUFLMUI7QUFDRCxNQUFNLENBQU4sSUFBWSxpQkFJWDtBQUpELFdBQVksaUJBQWlCO0lBQ3pCLHlEQUFRLENBQUE7SUFDUiwrREFBVyxDQUFBO0lBQ1gseURBQVEsQ0FBQTtBQUNaLENBQUMsRUFKVyxpQkFBaUIsS0FBakIsaUJBQWlCLFFBSTVCO0FBQ0QsTUFBTSxDQUFOLElBQVksYUFFWDtBQUZELFdBQVksYUFBYTtJQUN4QixvREFBbUMsQ0FBQTtBQUNwQyxDQUFDLEVBRlcsYUFBYSxLQUFiLGFBQWEsUUFFeEI7QUFDRCxNQUFNLENBQU4sSUFBWSxZQUVYO0FBRkQsV0FBWSxZQUFZO0lBQ3ZCLHVDQUF1QixDQUFBO0FBQ3hCLENBQUMsRUFGVyxZQUFZLEtBQVosWUFBWSxRQUV2QjtBQUNELE1BQU0sQ0FBTixJQUFZLFVBTVg7QUFORCxXQUFZLFVBQVU7SUFDckIsMkNBQVEsQ0FBQTtJQUNSLCtDQUFVLENBQUE7SUFDUCwyQ0FBUSxDQUFBO0lBQ1IsK0NBQVUsQ0FBQTtJQUNWLCtDQUFVLENBQUE7QUFDZCxDQUFDLEVBTlcsVUFBVSxLQUFWLFVBQVUsUUFNckI7QUFDRCxNQUFNLENBQU4sSUFBWSxhQVdYO0FBWEQsV0FBWSxhQUFhO0lBQ3JCLG9CQUFvQjtJQUNwQixpRkFBeUIsQ0FBQTtJQUN6QixxQkFBcUI7SUFDeEIsaUZBQXlCLENBQUE7SUFDdEIseUVBQXFCLENBQUE7SUFDckIsaUVBQWlCLENBQUE7SUFDakIscUdBQW1DLENBQUE7SUFDbkMsb0JBQW9CO0lBQ3ZCLDJFQUFzQixDQUFBO0lBQ25CLHFFQUFtQixDQUFBO0FBQ3ZCLENBQUMsRUFYVyxhQUFhLEtBQWIsYUFBYSxRQVd4QjtBQUNELE1BQU0sQ0FBTixJQUFZLE9BUVg7QUFSRCxXQUFZLE9BQU87SUFDbEIseUNBQVUsQ0FBQTtJQUNQLDJDQUFXLENBQUE7SUFDWCwrQ0FBYSxDQUFBO0lBQ2IsNkNBQVksQ0FBQTtJQUNaLHlDQUFVLENBQUE7SUFDViw2Q0FBWSxDQUFBO0lBQ1oseUNBQVUsQ0FBQTtBQUNkLENBQUMsRUFSVyxPQUFPLEtBQVAsT0FBTyxRQVFsQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIEFwaUVudW0ge1xyXG4gICAgQ3VzdG9tZXIgPSAnaHR0cDovL2xvY2FsaG9zdDo1MTk0L2FwaS9DdXN0b21lci8nLFxyXG4gICAgUmVwb3J0ID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTE5NS9hcGkvUmVwb3J0LycsXHJcbiAgICBEYXNoQm9hcmQgPSAnaHR0cDovL2xvY2FsaG9zdDo1MTk1L2FwaS9EYXNoQm9hcmQvJyxcclxuICAgIEJvb2tpbmcgPSAnaHR0cDovL2xvY2FsaG9zdDo1MTk2L2FwaS9Cb29raW5nLycsXHJcbiAgICBTZWN1cml0eSA9ICdodHRwOi8vbG9jYWxob3N0OjUxOTcvYXBpL1NlY3VyaXR5LycsXHJcbiAgICBDb21wYW55ID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTE5OC9hcGkvQ29tcGFueS8nLFxyXG4gICAgQnJvd3NlciA9ICdodHRwOi8vbG9jYWxob3N0OjUxOTkvYXBpL0Jyb3dzZXIvJywgIFxyXG4gICAgU2VsZWN0ID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTE5OS9hcGkvU2VsZWN0LycsXHJcbiAgICBIb2xpRGF5ID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTE5OS9hcGkvSG9saURheS8nLFxyXG4gICAgQ291cnQgPSAnaHR0cDovL2xvY2FsaG9zdDo1MTk5L2FwaS9Db3VydC8nLCAgICBcclxufVxyXG5leHBvcnQgZW51bSBOb3RpZmljYXRpb25UeXBlRW51bSB7XHJcblx0U3VjY2VzID0gJ3N1Y2Nlc3MnLFxyXG4gICAgRGVmYXVsdCA9ICdkZWZhdWx0JyxcclxuICAgIFByaW1hcnkgPSAncHJpbWFyeScsXHJcbiAgICBTZWNvbmRhcnkgPSAnc2Vjb25kYXJ5JyxcclxuICAgIFdhcm5pbmcgPSAnd2FybmluZycsXHJcbiAgICBEYW5nZXIgPSAnZGFuZ2VyJyxcclxuXHRJbmZvID0gJ2luZm8nXHJcbn1cclxuZXhwb3J0IGVudW0gUGxhY2VtZW50RnJvbUVudW0ge1xyXG5cdFRvcCA9ICd0b3AnLFxyXG5cdEJvdHRvbSA9ICdib3R0b20nXHJcbn1cclxuZXhwb3J0IGVudW0gUGxhY2VtZW50QWxpZ25FbnVtIHtcclxuXHRMZWZ0ID0gJ2xlZnQnLFxyXG5cdFJpZ2h0ID0gJ3JpZ2h0JyxcclxuICAgIENlbnRlciA9ICdjZW50ZXInXHJcbn1cclxuZXhwb3J0IGVudW0gUGF5bWVudFR5cGVFbnVtIHtcclxuICAgIE5vbmUgPSAwLFxyXG5cdENhc2ggPSAxLFxyXG5cdERlYml0ID0gMixcclxuICAgIENyZWRpdCA9IDNcclxufVxyXG5leHBvcnQgZW51bSBQYXltZW50U3RhdHVzRW51bSB7XHJcbiAgICBOb25lID0gMCxcclxuICAgIFBlbmRpbmcgPSAxLFxyXG4gICAgUGFpZCA9IDJcclxufVxyXG5leHBvcnQgZW51bSBCcm93c2VySWRFbnVtIHtcclxuXHRCcm93c2VyQ3VzdG9tZXIgPSAnQnJvd3NlckN1c3RvbWVyJ1xyXG59XHJcbmV4cG9ydCBlbnVtIFNlbGVjdElkRW51bSB7XHJcblx0TGlzdENvdXJ0ID0gJ0xpc3RDb3VydCdcclxufVxyXG5leHBvcnQgZW51bSBBY3Rpb25FbnVtIHtcclxuXHROb25lID0gMCxcclxuXHRDcmVhdGUgPSAxLFxyXG4gICAgRWRpdCA9IDIsXHJcbiAgICBEZXRhaWwgPSAzLFxyXG4gICAgRGVsZXRlID0gNFxyXG59XHJcbmV4cG9ydCBlbnVtIENvZGVFcnJvckVudW0ge1xyXG4gICAgLyogRXJyb3IgZ2VuZXJhbCAgKi9cclxuICAgIEludGVybmFsU2VydmVyRXJyb3IgPSAxMDAsXHJcbiAgICAvKiBFcnJvciBSZXNlcnZhcyAgKi9cclxuXHRCb29raW5nTm90QXZhaWxhYmxlID0gMTAxLFxyXG4gICAgQm9va2luZ05vdEZvdW5kID0gMTAyLFxyXG4gICAgQm9va2luZ1BhaWQgPSAxMDMsXHJcbiAgICBCb29raW5nRGF0ZVN0YXJ0TXVzdEJlR3JlYXRlciA9IDEwNCxcclxuICAgIC8qIEVycm9yIENhbmNoYXMgICovXHJcblx0Q291cnRXaXRoUmVjb3JkcyA9IDIwMSxcclxuICAgIENvdXJ0Tm90Rm91bmQgPSAyMDIsXHJcbn1cclxuZXhwb3J0IGVudW0gRGF5RW51bSB7XHJcblx0TW9uZGF5ID0gMSxcclxuICAgIFR1ZXNkYXkgPSAyLFxyXG4gICAgV2VkbmVzZGF5ID0gMyxcclxuICAgIFRodXJzZGF5ID0gNCxcclxuICAgIEZyaWRheSA9IDUsXHJcbiAgICBTYXR1cmRheSA9IDYsXHJcbiAgICBTdW5kYXkgPSA3XHJcbn1cclxuIl19