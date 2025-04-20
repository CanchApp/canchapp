export var ApiEnum;
(function (ApiEnum) {
    ApiEnum["Customer"] = "http://localhost:5194/api/Customer/";
    ApiEnum["Report"] = "http://localhost:5195/api/Report/";
    ApiEnum["DashBoard"] = "http://localhost:5195/api/DashBoard/";
    ApiEnum["Booking"] = "http://localhost:5196/api/Booking/";
    ApiEnum["Security"] = "https://securityapi.azurewebsites.net/api/Security/";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9ucy5lbnVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicy9jb21tb25zLWxpYi9zcmMvbGliL2VudW0vY29tbW9ucy5lbnVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBTixJQUFZLE9BY1g7QUFkRCxXQUFZLE9BQU87SUFDZiwyREFBZ0QsQ0FBQTtJQUNoRCx1REFBNEMsQ0FBQTtJQUM1Qyw2REFBa0QsQ0FBQTtJQUNsRCx5REFBOEMsQ0FBQTtJQUM5QywyRUFBZ0UsQ0FBQTtJQUNoRSxtREFBd0MsQ0FBQTtJQUN4QyxtREFBd0MsQ0FBQTtJQUN4Qyx1REFBNEMsQ0FBQTtJQUM1Qyx5REFBOEMsQ0FBQTtJQUM5Qyx5REFBOEMsQ0FBQTtJQUM5Qyx1REFBNEMsQ0FBQTtJQUM1Qyx5REFBOEMsQ0FBQTtJQUM5QyxxREFBMEMsQ0FBQTtBQUM5QyxDQUFDLEVBZFcsT0FBTyxLQUFQLE9BQU8sUUFjbEI7QUFDRCxNQUFNLENBQU4sSUFBWSxvQkFRWDtBQVJELFdBQVksb0JBQW9CO0lBQy9CLDBDQUFrQixDQUFBO0lBQ2YsMkNBQW1CLENBQUE7SUFDbkIsMkNBQW1CLENBQUE7SUFDbkIsK0NBQXVCLENBQUE7SUFDdkIsMkNBQW1CLENBQUE7SUFDbkIseUNBQWlCLENBQUE7SUFDcEIscUNBQWEsQ0FBQTtBQUNkLENBQUMsRUFSVyxvQkFBb0IsS0FBcEIsb0JBQW9CLFFBUS9CO0FBQ0QsTUFBTSxDQUFOLElBQVksaUJBR1g7QUFIRCxXQUFZLGlCQUFpQjtJQUM1QixnQ0FBVyxDQUFBO0lBQ1gsc0NBQWlCLENBQUE7QUFDbEIsQ0FBQyxFQUhXLGlCQUFpQixLQUFqQixpQkFBaUIsUUFHNUI7QUFDRCxNQUFNLENBQU4sSUFBWSxrQkFJWDtBQUpELFdBQVksa0JBQWtCO0lBQzdCLG1DQUFhLENBQUE7SUFDYixxQ0FBZSxDQUFBO0lBQ1osdUNBQWlCLENBQUE7QUFDckIsQ0FBQyxFQUpXLGtCQUFrQixLQUFsQixrQkFBa0IsUUFJN0I7QUFDRCxNQUFNLENBQU4sSUFBWSxlQUtYO0FBTEQsV0FBWSxlQUFlO0lBQ3ZCLHFEQUFRLENBQUE7SUFDWCxxREFBUSxDQUFBO0lBQ1IsdURBQVMsQ0FBQTtJQUNOLHlEQUFVLENBQUE7QUFDZCxDQUFDLEVBTFcsZUFBZSxLQUFmLGVBQWUsUUFLMUI7QUFDRCxNQUFNLENBQU4sSUFBWSxpQkFJWDtBQUpELFdBQVksaUJBQWlCO0lBQ3pCLHlEQUFRLENBQUE7SUFDUiwrREFBVyxDQUFBO0lBQ1gseURBQVEsQ0FBQTtBQUNaLENBQUMsRUFKVyxpQkFBaUIsS0FBakIsaUJBQWlCLFFBSTVCO0FBQ0QsTUFBTSxDQUFOLElBQVksYUFFWDtBQUZELFdBQVksYUFBYTtJQUN4QixvREFBbUMsQ0FBQTtBQUNwQyxDQUFDLEVBRlcsYUFBYSxLQUFiLGFBQWEsUUFFeEI7QUFDRCxNQUFNLENBQU4sSUFBWSxZQUdYO0FBSEQsV0FBWSxZQUFZO0lBQ3ZCLHVDQUF1QixDQUFBO0lBQ3BCLHFDQUFxQixDQUFBO0FBQ3pCLENBQUMsRUFIVyxZQUFZLEtBQVosWUFBWSxRQUd2QjtBQUNELE1BQU0sQ0FBTixJQUFZLFVBTVg7QUFORCxXQUFZLFVBQVU7SUFDckIsMkNBQVEsQ0FBQTtJQUNSLCtDQUFVLENBQUE7SUFDUCwyQ0FBUSxDQUFBO0lBQ1IsK0NBQVUsQ0FBQTtJQUNWLCtDQUFVLENBQUE7QUFDZCxDQUFDLEVBTlcsVUFBVSxLQUFWLFVBQVUsUUFNckI7QUFDRCxNQUFNLENBQU4sSUFBWSxhQVdYO0FBWEQsV0FBWSxhQUFhO0lBQ3JCLG9CQUFvQjtJQUNwQixpRkFBeUIsQ0FBQTtJQUN6QixxQkFBcUI7SUFDeEIsaUZBQXlCLENBQUE7SUFDdEIseUVBQXFCLENBQUE7SUFDckIsaUVBQWlCLENBQUE7SUFDakIscUdBQW1DLENBQUE7SUFDbkMsb0JBQW9CO0lBQ3ZCLDJFQUFzQixDQUFBO0lBQ25CLHFFQUFtQixDQUFBO0FBQ3ZCLENBQUMsRUFYVyxhQUFhLEtBQWIsYUFBYSxRQVd4QjtBQUNELE1BQU0sQ0FBTixJQUFZLE9BUVg7QUFSRCxXQUFZLE9BQU87SUFDbEIseUNBQVUsQ0FBQTtJQUNQLDJDQUFXLENBQUE7SUFDWCwrQ0FBYSxDQUFBO0lBQ2IsNkNBQVksQ0FBQTtJQUNaLHlDQUFVLENBQUE7SUFDViw2Q0FBWSxDQUFBO0lBQ1oseUNBQVUsQ0FBQTtBQUNkLENBQUMsRUFSVyxPQUFPLEtBQVAsT0FBTyxRQVFsQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIEFwaUVudW0ge1xyXG4gICAgQ3VzdG9tZXIgPSAnaHR0cDovL2xvY2FsaG9zdDo1MTk0L2FwaS9DdXN0b21lci8nLFxyXG4gICAgUmVwb3J0ID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTE5NS9hcGkvUmVwb3J0LycsXHJcbiAgICBEYXNoQm9hcmQgPSAnaHR0cDovL2xvY2FsaG9zdDo1MTk1L2FwaS9EYXNoQm9hcmQvJyxcclxuICAgIEJvb2tpbmcgPSAnaHR0cDovL2xvY2FsaG9zdDo1MTk2L2FwaS9Cb29raW5nLycsXHJcbiAgICBTZWN1cml0eSA9ICdodHRwczovL3NlY3VyaXR5YXBpLmF6dXJld2Vic2l0ZXMubmV0L2FwaS9TZWN1cml0eS8nLFxyXG4gICAgVXNlciA9ICdodHRwOi8vbG9jYWxob3N0OjUxOTcvYXBpL1VzZXIvJyxcclxuICAgIFJvbGUgPSAnaHR0cDovL2xvY2FsaG9zdDo1MTk3L2FwaS9Sb2xlLycsXHJcbiAgICBNb2R1bGUgPSAnaHR0cDovL2xvY2FsaG9zdDo1MTk3L2FwaS9Nb2R1bGUvJyxcclxuICAgIENvbXBhbnkgPSAnaHR0cDovL2xvY2FsaG9zdDo1MTk4L2FwaS9Db21wYW55LycsXHJcbiAgICBCcm93c2VyID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTE5OS9hcGkvQnJvd3Nlci8nLCAgXHJcbiAgICBTZWxlY3QgPSAnaHR0cDovL2xvY2FsaG9zdDo1MTk5L2FwaS9TZWxlY3QvJyxcclxuICAgIEhvbGlEYXkgPSAnaHR0cDovL2xvY2FsaG9zdDo1MTk5L2FwaS9Ib2xpRGF5LycsXHJcbiAgICBDb3VydCA9ICdodHRwOi8vbG9jYWxob3N0OjUxOTkvYXBpL0NvdXJ0LycsICAgIFxyXG59XHJcbmV4cG9ydCBlbnVtIE5vdGlmaWNhdGlvblR5cGVFbnVtIHtcclxuXHRTdWNjZXMgPSAnc3VjY2VzcycsXHJcbiAgICBEZWZhdWx0ID0gJ2RlZmF1bHQnLFxyXG4gICAgUHJpbWFyeSA9ICdwcmltYXJ5JyxcclxuICAgIFNlY29uZGFyeSA9ICdzZWNvbmRhcnknLFxyXG4gICAgV2FybmluZyA9ICd3YXJuaW5nJyxcclxuICAgIERhbmdlciA9ICdkYW5nZXInLFxyXG5cdEluZm8gPSAnaW5mbydcclxufVxyXG5leHBvcnQgZW51bSBQbGFjZW1lbnRGcm9tRW51bSB7XHJcblx0VG9wID0gJ3RvcCcsXHJcblx0Qm90dG9tID0gJ2JvdHRvbSdcclxufVxyXG5leHBvcnQgZW51bSBQbGFjZW1lbnRBbGlnbkVudW0ge1xyXG5cdExlZnQgPSAnbGVmdCcsXHJcblx0UmlnaHQgPSAncmlnaHQnLFxyXG4gICAgQ2VudGVyID0gJ2NlbnRlcidcclxufVxyXG5leHBvcnQgZW51bSBQYXltZW50VHlwZUVudW0ge1xyXG4gICAgTm9uZSA9IDAsXHJcblx0Q2FzaCA9IDEsXHJcblx0RGViaXQgPSAyLFxyXG4gICAgQ3JlZGl0ID0gM1xyXG59XHJcbmV4cG9ydCBlbnVtIFBheW1lbnRTdGF0dXNFbnVtIHtcclxuICAgIE5vbmUgPSAwLFxyXG4gICAgUGVuZGluZyA9IDEsXHJcbiAgICBQYWlkID0gMlxyXG59XHJcbmV4cG9ydCBlbnVtIEJyb3dzZXJJZEVudW0ge1xyXG5cdEJyb3dzZXJDdXN0b21lciA9ICdCcm93c2VyQ3VzdG9tZXInXHJcbn1cclxuZXhwb3J0IGVudW0gU2VsZWN0SWRFbnVtIHtcclxuXHRMaXN0Q291cnQgPSAnTGlzdENvdXJ0JyxcclxuICAgIExpc3RSb2xlID0gJ0xpc3RSb2xlJ1xyXG59XHJcbmV4cG9ydCBlbnVtIEFjdGlvbkVudW0ge1xyXG5cdE5vbmUgPSAwLFxyXG5cdENyZWF0ZSA9IDEsXHJcbiAgICBFZGl0ID0gMixcclxuICAgIERldGFpbCA9IDMsXHJcbiAgICBEZWxldGUgPSA0XHJcbn1cclxuZXhwb3J0IGVudW0gQ29kZUVycm9yRW51bSB7XHJcbiAgICAvKiBFcnJvciBnZW5lcmFsICAqL1xyXG4gICAgSW50ZXJuYWxTZXJ2ZXJFcnJvciA9IDEwMCxcclxuICAgIC8qIEVycm9yIFJlc2VydmFzICAqL1xyXG5cdEJvb2tpbmdOb3RBdmFpbGFibGUgPSAxMDEsXHJcbiAgICBCb29raW5nTm90Rm91bmQgPSAxMDIsXHJcbiAgICBCb29raW5nUGFpZCA9IDEwMyxcclxuICAgIEJvb2tpbmdEYXRlU3RhcnRNdXN0QmVHcmVhdGVyID0gMTA0LFxyXG4gICAgLyogRXJyb3IgQ2FuY2hhcyAgKi9cclxuXHRDb3VydFdpdGhSZWNvcmRzID0gMjAxLFxyXG4gICAgQ291cnROb3RGb3VuZCA9IDIwMixcclxufVxyXG5leHBvcnQgZW51bSBEYXlFbnVtIHtcclxuXHRNb25kYXkgPSAxLFxyXG4gICAgVHVlc2RheSA9IDIsXHJcbiAgICBXZWRuZXNkYXkgPSAzLFxyXG4gICAgVGh1cnNkYXkgPSA0LFxyXG4gICAgRnJpZGF5ID0gNSxcclxuICAgIFNhdHVyZGF5ID0gNixcclxuICAgIFN1bmRheSA9IDdcclxufVxyXG4iXX0=