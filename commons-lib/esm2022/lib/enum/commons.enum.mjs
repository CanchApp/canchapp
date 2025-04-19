export var ApiEnum;
(function (ApiEnum) {
    ApiEnum["Customer"] = "http://localhost:5194/api/Customer/";
    ApiEnum["Report"] = "http://localhost:5195/api/Report/";
    ApiEnum["DashBoard"] = "http://localhost:5195/api/DashBoard/";
    ApiEnum["Booking"] = "http://localhost:5196/api/Booking/";
    ApiEnum["Security"] = "http://localhost:5197/api/Security/";
    ApiEnum["User"] = "http://localhost:5197/api/User/";
    ApiEnum["Role"] = "http://localhost:5197/api/Role/";
    ApiEnum["Module"] = "http://localhost:5197/api/Module/";
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
    SelectIdEnum["ListRole"] = "ListRole";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9ucy5lbnVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicy9jb21tb25zLWxpYi9zcmMvbGliL2VudW0vY29tbW9ucy5lbnVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBTixJQUFZLE9BY1g7QUFkRCxXQUFZLE9BQU87SUFDZiwyREFBZ0QsQ0FBQTtJQUNoRCx1REFBNEMsQ0FBQTtJQUM1Qyw2REFBa0QsQ0FBQTtJQUNsRCx5REFBOEMsQ0FBQTtJQUM5QywyREFBZ0QsQ0FBQTtJQUNoRCxtREFBd0MsQ0FBQTtJQUN4QyxtREFBd0MsQ0FBQTtJQUN4Qyx1REFBNEMsQ0FBQTtJQUM1Qyx5REFBOEMsQ0FBQTtJQUM5Qyx5REFBOEMsQ0FBQTtJQUM5Qyx1REFBNEMsQ0FBQTtJQUM1Qyx5REFBOEMsQ0FBQTtJQUM5QyxxREFBMEMsQ0FBQTtBQUM5QyxDQUFDLEVBZFcsT0FBTyxLQUFQLE9BQU8sUUFjbEI7QUFDRCxNQUFNLENBQU4sSUFBWSxvQkFRWDtBQVJELFdBQVksb0JBQW9CO0lBQy9CLDBDQUFrQixDQUFBO0lBQ2YsMkNBQW1CLENBQUE7SUFDbkIsMkNBQW1CLENBQUE7SUFDbkIsK0NBQXVCLENBQUE7SUFDdkIsMkNBQW1CLENBQUE7SUFDbkIseUNBQWlCLENBQUE7SUFDcEIscUNBQWEsQ0FBQTtBQUNkLENBQUMsRUFSVyxvQkFBb0IsS0FBcEIsb0JBQW9CLFFBUS9CO0FBQ0QsTUFBTSxDQUFOLElBQVksaUJBR1g7QUFIRCxXQUFZLGlCQUFpQjtJQUM1QixnQ0FBVyxDQUFBO0lBQ1gsc0NBQWlCLENBQUE7QUFDbEIsQ0FBQyxFQUhXLGlCQUFpQixLQUFqQixpQkFBaUIsUUFHNUI7QUFDRCxNQUFNLENBQU4sSUFBWSxrQkFJWDtBQUpELFdBQVksa0JBQWtCO0lBQzdCLG1DQUFhLENBQUE7SUFDYixxQ0FBZSxDQUFBO0lBQ1osdUNBQWlCLENBQUE7QUFDckIsQ0FBQyxFQUpXLGtCQUFrQixLQUFsQixrQkFBa0IsUUFJN0I7QUFDRCxNQUFNLENBQU4sSUFBWSxlQUtYO0FBTEQsV0FBWSxlQUFlO0lBQ3ZCLHFEQUFRLENBQUE7SUFDWCxxREFBUSxDQUFBO0lBQ1IsdURBQVMsQ0FBQTtJQUNOLHlEQUFVLENBQUE7QUFDZCxDQUFDLEVBTFcsZUFBZSxLQUFmLGVBQWUsUUFLMUI7QUFDRCxNQUFNLENBQU4sSUFBWSxpQkFJWDtBQUpELFdBQVksaUJBQWlCO0lBQ3pCLHlEQUFRLENBQUE7SUFDUiwrREFBVyxDQUFBO0lBQ1gseURBQVEsQ0FBQTtBQUNaLENBQUMsRUFKVyxpQkFBaUIsS0FBakIsaUJBQWlCLFFBSTVCO0FBQ0QsTUFBTSxDQUFOLElBQVksYUFFWDtBQUZELFdBQVksYUFBYTtJQUN4QixvREFBbUMsQ0FBQTtBQUNwQyxDQUFDLEVBRlcsYUFBYSxLQUFiLGFBQWEsUUFFeEI7QUFDRCxNQUFNLENBQU4sSUFBWSxZQUdYO0FBSEQsV0FBWSxZQUFZO0lBQ3ZCLHVDQUF1QixDQUFBO0lBQ3BCLHFDQUFxQixDQUFBO0FBQ3pCLENBQUMsRUFIVyxZQUFZLEtBQVosWUFBWSxRQUd2QjtBQUNELE1BQU0sQ0FBTixJQUFZLFVBTVg7QUFORCxXQUFZLFVBQVU7SUFDckIsMkNBQVEsQ0FBQTtJQUNSLCtDQUFVLENBQUE7SUFDUCwyQ0FBUSxDQUFBO0lBQ1IsK0NBQVUsQ0FBQTtJQUNWLCtDQUFVLENBQUE7QUFDZCxDQUFDLEVBTlcsVUFBVSxLQUFWLFVBQVUsUUFNckI7QUFDRCxNQUFNLENBQU4sSUFBWSxhQVdYO0FBWEQsV0FBWSxhQUFhO0lBQ3JCLG9CQUFvQjtJQUNwQixpRkFBeUIsQ0FBQTtJQUN6QixxQkFBcUI7SUFDeEIsaUZBQXlCLENBQUE7SUFDdEIseUVBQXFCLENBQUE7SUFDckIsaUVBQWlCLENBQUE7SUFDakIscUdBQW1DLENBQUE7SUFDbkMsb0JBQW9CO0lBQ3ZCLDJFQUFzQixDQUFBO0lBQ25CLHFFQUFtQixDQUFBO0FBQ3ZCLENBQUMsRUFYVyxhQUFhLEtBQWIsYUFBYSxRQVd4QjtBQUNELE1BQU0sQ0FBTixJQUFZLE9BUVg7QUFSRCxXQUFZLE9BQU87SUFDbEIseUNBQVUsQ0FBQTtJQUNQLDJDQUFXLENBQUE7SUFDWCwrQ0FBYSxDQUFBO0lBQ2IsNkNBQVksQ0FBQTtJQUNaLHlDQUFVLENBQUE7SUFDViw2Q0FBWSxDQUFBO0lBQ1oseUNBQVUsQ0FBQTtBQUNkLENBQUMsRUFSVyxPQUFPLEtBQVAsT0FBTyxRQVFsQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIEFwaUVudW0ge1xyXG4gICAgQ3VzdG9tZXIgPSAnaHR0cDovL2xvY2FsaG9zdDo1MTk0L2FwaS9DdXN0b21lci8nLFxyXG4gICAgUmVwb3J0ID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTE5NS9hcGkvUmVwb3J0LycsXHJcbiAgICBEYXNoQm9hcmQgPSAnaHR0cDovL2xvY2FsaG9zdDo1MTk1L2FwaS9EYXNoQm9hcmQvJyxcclxuICAgIEJvb2tpbmcgPSAnaHR0cDovL2xvY2FsaG9zdDo1MTk2L2FwaS9Cb29raW5nLycsXHJcbiAgICBTZWN1cml0eSA9ICdodHRwOi8vbG9jYWxob3N0OjUxOTcvYXBpL1NlY3VyaXR5LycsXHJcbiAgICBVc2VyID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTE5Ny9hcGkvVXNlci8nLFxyXG4gICAgUm9sZSA9ICdodHRwOi8vbG9jYWxob3N0OjUxOTcvYXBpL1JvbGUvJyxcclxuICAgIE1vZHVsZSA9ICdodHRwOi8vbG9jYWxob3N0OjUxOTcvYXBpL01vZHVsZS8nLFxyXG4gICAgQ29tcGFueSA9ICdodHRwOi8vbG9jYWxob3N0OjUxOTgvYXBpL0NvbXBhbnkvJyxcclxuICAgIEJyb3dzZXIgPSAnaHR0cDovL2xvY2FsaG9zdDo1MTk5L2FwaS9Ccm93c2VyLycsICBcclxuICAgIFNlbGVjdCA9ICdodHRwOi8vbG9jYWxob3N0OjUxOTkvYXBpL1NlbGVjdC8nLFxyXG4gICAgSG9saURheSA9ICdodHRwOi8vbG9jYWxob3N0OjUxOTkvYXBpL0hvbGlEYXkvJyxcclxuICAgIENvdXJ0ID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTE5OS9hcGkvQ291cnQvJywgICAgXHJcbn1cclxuZXhwb3J0IGVudW0gTm90aWZpY2F0aW9uVHlwZUVudW0ge1xyXG5cdFN1Y2NlcyA9ICdzdWNjZXNzJyxcclxuICAgIERlZmF1bHQgPSAnZGVmYXVsdCcsXHJcbiAgICBQcmltYXJ5ID0gJ3ByaW1hcnknLFxyXG4gICAgU2Vjb25kYXJ5ID0gJ3NlY29uZGFyeScsXHJcbiAgICBXYXJuaW5nID0gJ3dhcm5pbmcnLFxyXG4gICAgRGFuZ2VyID0gJ2RhbmdlcicsXHJcblx0SW5mbyA9ICdpbmZvJ1xyXG59XHJcbmV4cG9ydCBlbnVtIFBsYWNlbWVudEZyb21FbnVtIHtcclxuXHRUb3AgPSAndG9wJyxcclxuXHRCb3R0b20gPSAnYm90dG9tJ1xyXG59XHJcbmV4cG9ydCBlbnVtIFBsYWNlbWVudEFsaWduRW51bSB7XHJcblx0TGVmdCA9ICdsZWZ0JyxcclxuXHRSaWdodCA9ICdyaWdodCcsXHJcbiAgICBDZW50ZXIgPSAnY2VudGVyJ1xyXG59XHJcbmV4cG9ydCBlbnVtIFBheW1lbnRUeXBlRW51bSB7XHJcbiAgICBOb25lID0gMCxcclxuXHRDYXNoID0gMSxcclxuXHREZWJpdCA9IDIsXHJcbiAgICBDcmVkaXQgPSAzXHJcbn1cclxuZXhwb3J0IGVudW0gUGF5bWVudFN0YXR1c0VudW0ge1xyXG4gICAgTm9uZSA9IDAsXHJcbiAgICBQZW5kaW5nID0gMSxcclxuICAgIFBhaWQgPSAyXHJcbn1cclxuZXhwb3J0IGVudW0gQnJvd3NlcklkRW51bSB7XHJcblx0QnJvd3NlckN1c3RvbWVyID0gJ0Jyb3dzZXJDdXN0b21lcidcclxufVxyXG5leHBvcnQgZW51bSBTZWxlY3RJZEVudW0ge1xyXG5cdExpc3RDb3VydCA9ICdMaXN0Q291cnQnLFxyXG4gICAgTGlzdFJvbGUgPSAnTGlzdFJvbGUnXHJcbn1cclxuZXhwb3J0IGVudW0gQWN0aW9uRW51bSB7XHJcblx0Tm9uZSA9IDAsXHJcblx0Q3JlYXRlID0gMSxcclxuICAgIEVkaXQgPSAyLFxyXG4gICAgRGV0YWlsID0gMyxcclxuICAgIERlbGV0ZSA9IDRcclxufVxyXG5leHBvcnQgZW51bSBDb2RlRXJyb3JFbnVtIHtcclxuICAgIC8qIEVycm9yIGdlbmVyYWwgICovXHJcbiAgICBJbnRlcm5hbFNlcnZlckVycm9yID0gMTAwLFxyXG4gICAgLyogRXJyb3IgUmVzZXJ2YXMgICovXHJcblx0Qm9va2luZ05vdEF2YWlsYWJsZSA9IDEwMSxcclxuICAgIEJvb2tpbmdOb3RGb3VuZCA9IDEwMixcclxuICAgIEJvb2tpbmdQYWlkID0gMTAzLFxyXG4gICAgQm9va2luZ0RhdGVTdGFydE11c3RCZUdyZWF0ZXIgPSAxMDQsXHJcbiAgICAvKiBFcnJvciBDYW5jaGFzICAqL1xyXG5cdENvdXJ0V2l0aFJlY29yZHMgPSAyMDEsXHJcbiAgICBDb3VydE5vdEZvdW5kID0gMjAyLFxyXG59XHJcbmV4cG9ydCBlbnVtIERheUVudW0ge1xyXG5cdE1vbmRheSA9IDEsXHJcbiAgICBUdWVzZGF5ID0gMixcclxuICAgIFdlZG5lc2RheSA9IDMsXHJcbiAgICBUaHVyc2RheSA9IDQsXHJcbiAgICBGcmlkYXkgPSA1LFxyXG4gICAgU2F0dXJkYXkgPSA2LFxyXG4gICAgU3VuZGF5ID0gN1xyXG59XHJcbiJdfQ==