import { Injectable } from '@angular/core';
import { Notifications } from './models/notification.model';
import { NotificationTypeEnum } from './enum/commons.enum';
import * as i0 from "@angular/core";
import * as i1 from "./service/jquery-service.service";
export class NotificationService {
    constructor(jqueryService) {
        this.jqueryService = jqueryService;
        this.$ = this.jqueryService.useJQuery();
    }
    /**
   * Genera una notificacion.
   * @param {Notifications}  notificacion - Objeto configuración de la notificación.
   */
    showCustomNotification(notification) {
        this.$.notify(notification, {
            type: notification.type,
            placement: {
                from: notification.placementFrom,
                align: notification.placementAlign
            },
            time: 1000,
            delay: notification.delay,
        });
    }
    /**
     * Genera una notificacion con plantilla exitosa.
     * @param _message - Mensaje a mostrar en la notificación.
     */
    SuccesNotification(_message) {
        const notiSucces = new Notifications();
        notiSucces.message = _message;
        notiSucces.icon = 'fa-solid fa-check';
        notiSucces.type = NotificationTypeEnum.Succes;
        this.showCustomNotification(notiSucces);
    }
    /**
     * Genera una notificacion con plantilla informativa.
     * @param _title - Titulo de la notificación.
     * @param _message - Mensaje a mostrar en la notificación.
     */
    InfoNotification(_message) {
        const notiSucces = new Notifications();
        notiSucces.message = _message;
        notiSucces.icon = 'fa-solid fa-info';
        notiSucces.type = NotificationTypeEnum.Info;
        this.showCustomNotification(notiSucces);
    }
    /**
   * Genera una notificacion con plantilla de error.
   * @param _title - Titulo de la notificación.
   * @param _message - Mensaje a mostrar en la notificación.
   */
    ErrorNotification(_message) {
        const notiSucces = new Notifications();
        notiSucces.message = _message;
        notiSucces.icon = 'fa-solid fa-bell';
        notiSucces.type = NotificationTypeEnum.Danger;
        this.showCustomNotification(notiSucces);
    }
    /**
   * Genera una notificacion con plantilla de advertencia.
   * @param _title - Titulo de la notificación.
   * @param _message - Mensaje a mostrar en la notificación.
   */
    WarningNotification(_message) {
        const notiSucces = new Notifications();
        notiSucces.message = _message;
        notiSucces.icon = 'fa-solid fa-exclamation';
        notiSucces.type = NotificationTypeEnum.Warning;
        this.showCustomNotification(notiSucces);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: NotificationService, deps: [{ token: i1.JqueryService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: NotificationService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: NotificationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [{ type: i1.JqueryService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJzL2NvbW1vbnMtbGliL3NyYy9saWIvbm90aWZpY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUJBQXFCLENBQUM7OztBQUszRCxNQUFNLE9BQU8sbUJBQW1CO0lBSTlCLFlBQTZCLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBRnhDLE1BQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBSXBELENBQUM7SUFFQzs7O0tBR0M7SUFDSCxzQkFBc0IsQ0FBQyxZQUEyQjtRQUNoRCxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUM7WUFDekIsSUFBSSxFQUFFLFlBQVksQ0FBQyxJQUFJO1lBQ3ZCLFNBQVMsRUFBRTtnQkFDVCxJQUFJLEVBQUUsWUFBWSxDQUFDLGFBQWE7Z0JBQ2hDLEtBQUssRUFBRSxZQUFZLENBQUMsY0FBYzthQUNuQztZQUNELElBQUksRUFBRSxJQUFJO1lBQ1YsS0FBSyxFQUFFLFlBQVksQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSCxrQkFBa0IsQ0FBQyxRQUFnQjtRQUNqQyxNQUFNLFVBQVUsR0FBa0IsSUFBSSxhQUFhLEVBQUUsQ0FBQztRQUN0RCxVQUFVLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztRQUM5QixVQUFVLENBQUMsSUFBSSxHQUFHLG1CQUFtQixDQUFDO1FBQ3RDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsb0JBQW9CLENBQUMsTUFBTSxDQUFDO1FBQzlDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGdCQUFnQixDQUFDLFFBQWdCO1FBQy9CLE1BQU0sVUFBVSxHQUFrQixJQUFJLGFBQWEsRUFBRSxDQUFDO1FBQ3RELFVBQVUsQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO1FBQzlCLFVBQVUsQ0FBQyxJQUFJLEdBQUcsa0JBQWtCLENBQUM7UUFDckMsVUFBVSxDQUFDLElBQUksR0FBRyxvQkFBb0IsQ0FBQyxJQUFJLENBQUM7UUFDNUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRDs7OztLQUlDO0lBQ0QsaUJBQWlCLENBQUMsUUFBZ0I7UUFDaEMsTUFBTSxVQUFVLEdBQWtCLElBQUksYUFBYSxFQUFFLENBQUM7UUFDdEQsVUFBVSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7UUFDOUIsVUFBVSxDQUFDLElBQUksR0FBRyxrQkFBa0IsQ0FBQztRQUNyQyxVQUFVLENBQUMsSUFBSSxHQUFHLG9CQUFvQixDQUFDLE1BQU0sQ0FBQztRQUM5QyxJQUFJLENBQUMsc0JBQXNCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVEOzs7O0tBSUM7SUFDRCxtQkFBbUIsQ0FBRSxRQUFnQjtRQUNuQyxNQUFNLFVBQVUsR0FBa0IsSUFBSSxhQUFhLEVBQUUsQ0FBQztRQUN0RCxVQUFVLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztRQUM5QixVQUFVLENBQUMsSUFBSSxHQUFHLHlCQUF5QixDQUFDO1FBQzVDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsb0JBQW9CLENBQUMsT0FBTyxDQUFDO1FBQy9DLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMxQyxDQUFDOytHQXpFVSxtQkFBbUI7bUhBQW5CLG1CQUFtQixjQUZsQixNQUFNOzs0RkFFUCxtQkFBbUI7a0JBSC9CLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBKcXVlcnlTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlL2pxdWVyeS1zZXJ2aWNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25zIH0gZnJvbSAnLi9tb2RlbHMvbm90aWZpY2F0aW9uLm1vZGVsJztcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uVHlwZUVudW0gfSBmcm9tICcuL2VudW0vY29tbW9ucy5lbnVtJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvblNlcnZpY2Uge1xyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5ICQgPSB0aGlzLmpxdWVyeVNlcnZpY2UudXNlSlF1ZXJ5KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkganF1ZXJ5U2VydmljZTogSnF1ZXJ5U2VydmljZSkgeyBcclxuXHJcbiAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAqIEdlbmVyYSB1bmEgbm90aWZpY2FjaW9uLlxyXG4gICAqIEBwYXJhbSB7Tm90aWZpY2F0aW9uc30gIG5vdGlmaWNhY2lvbiAtIE9iamV0byBjb25maWd1cmFjacOzbiBkZSBsYSBub3RpZmljYWNpw7NuLlxyXG4gICAqL1xyXG4gIHNob3dDdXN0b21Ob3RpZmljYXRpb24obm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb25zKSB7ICAgIFxyXG4gICAgdGhpcy4kLm5vdGlmeShub3RpZmljYXRpb24se1xyXG4gICAgICB0eXBlOiBub3RpZmljYXRpb24udHlwZSxcclxuICAgICAgcGxhY2VtZW50OiB7XHJcbiAgICAgICAgZnJvbTogbm90aWZpY2F0aW9uLnBsYWNlbWVudEZyb20sXHJcbiAgICAgICAgYWxpZ246IG5vdGlmaWNhdGlvbi5wbGFjZW1lbnRBbGlnblxyXG4gICAgICB9LFxyXG4gICAgICB0aW1lOiAxMDAwLFxyXG4gICAgICBkZWxheTogbm90aWZpY2F0aW9uLmRlbGF5LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZW5lcmEgdW5hIG5vdGlmaWNhY2lvbiBjb24gcGxhbnRpbGxhIGV4aXRvc2EuXHJcbiAgICogQHBhcmFtIF9tZXNzYWdlIC0gTWVuc2FqZSBhIG1vc3RyYXIgZW4gbGEgbm90aWZpY2FjacOzbi5cclxuICAgKi9cclxuICBTdWNjZXNOb3RpZmljYXRpb24oX21lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgY29uc3Qgbm90aVN1Y2NlczogTm90aWZpY2F0aW9ucyA9IG5ldyBOb3RpZmljYXRpb25zKCk7XHJcbiAgICBub3RpU3VjY2VzLm1lc3NhZ2UgPSBfbWVzc2FnZTtcclxuICAgIG5vdGlTdWNjZXMuaWNvbiA9ICdmYS1zb2xpZCBmYS1jaGVjayc7XHJcbiAgICBub3RpU3VjY2VzLnR5cGUgPSBOb3RpZmljYXRpb25UeXBlRW51bS5TdWNjZXM7XHJcbiAgICB0aGlzLnNob3dDdXN0b21Ob3RpZmljYXRpb24obm90aVN1Y2Nlcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZW5lcmEgdW5hIG5vdGlmaWNhY2lvbiBjb24gcGxhbnRpbGxhIGluZm9ybWF0aXZhLlxyXG4gICAqIEBwYXJhbSBfdGl0bGUgLSBUaXR1bG8gZGUgbGEgbm90aWZpY2FjacOzbi5cclxuICAgKiBAcGFyYW0gX21lc3NhZ2UgLSBNZW5zYWplIGEgbW9zdHJhciBlbiBsYSBub3RpZmljYWNpw7NuLlxyXG4gICAqL1xyXG4gIEluZm9Ob3RpZmljYXRpb24oX21lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgY29uc3Qgbm90aVN1Y2NlczogTm90aWZpY2F0aW9ucyA9IG5ldyBOb3RpZmljYXRpb25zKCk7XHJcbiAgICBub3RpU3VjY2VzLm1lc3NhZ2UgPSBfbWVzc2FnZTtcclxuICAgIG5vdGlTdWNjZXMuaWNvbiA9ICdmYS1zb2xpZCBmYS1pbmZvJztcclxuICAgIG5vdGlTdWNjZXMudHlwZSA9IE5vdGlmaWNhdGlvblR5cGVFbnVtLkluZm87XHJcbiAgICB0aGlzLnNob3dDdXN0b21Ob3RpZmljYXRpb24obm90aVN1Y2Nlcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICogR2VuZXJhIHVuYSBub3RpZmljYWNpb24gY29uIHBsYW50aWxsYSBkZSBlcnJvci5cclxuICogQHBhcmFtIF90aXRsZSAtIFRpdHVsbyBkZSBsYSBub3RpZmljYWNpw7NuLlxyXG4gKiBAcGFyYW0gX21lc3NhZ2UgLSBNZW5zYWplIGEgbW9zdHJhciBlbiBsYSBub3RpZmljYWNpw7NuLlxyXG4gKi9cclxuICBFcnJvck5vdGlmaWNhdGlvbihfbWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBub3RpU3VjY2VzOiBOb3RpZmljYXRpb25zID0gbmV3IE5vdGlmaWNhdGlvbnMoKTtcclxuICAgIG5vdGlTdWNjZXMubWVzc2FnZSA9IF9tZXNzYWdlO1xyXG4gICAgbm90aVN1Y2Nlcy5pY29uID0gJ2ZhLXNvbGlkIGZhLWJlbGwnO1xyXG4gICAgbm90aVN1Y2Nlcy50eXBlID0gTm90aWZpY2F0aW9uVHlwZUVudW0uRGFuZ2VyO1xyXG4gICAgdGhpcy5zaG93Q3VzdG9tTm90aWZpY2F0aW9uKG5vdGlTdWNjZXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqIEdlbmVyYSB1bmEgbm90aWZpY2FjaW9uIGNvbiBwbGFudGlsbGEgZGUgYWR2ZXJ0ZW5jaWEuXHJcbiAqIEBwYXJhbSBfdGl0bGUgLSBUaXR1bG8gZGUgbGEgbm90aWZpY2FjacOzbi5cclxuICogQHBhcmFtIF9tZXNzYWdlIC0gTWVuc2FqZSBhIG1vc3RyYXIgZW4gbGEgbm90aWZpY2FjacOzbi5cclxuICovXHJcbiAgV2FybmluZ05vdGlmaWNhdGlvbiggX21lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgY29uc3Qgbm90aVN1Y2NlczogTm90aWZpY2F0aW9ucyA9IG5ldyBOb3RpZmljYXRpb25zKCk7XHJcbiAgICBub3RpU3VjY2VzLm1lc3NhZ2UgPSBfbWVzc2FnZTtcclxuICAgIG5vdGlTdWNjZXMuaWNvbiA9ICdmYS1zb2xpZCBmYS1leGNsYW1hdGlvbic7XHJcbiAgICBub3RpU3VjY2VzLnR5cGUgPSBOb3RpZmljYXRpb25UeXBlRW51bS5XYXJuaW5nO1xyXG4gICAgdGhpcy5zaG93Q3VzdG9tTm90aWZpY2F0aW9uKG5vdGlTdWNjZXMpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19