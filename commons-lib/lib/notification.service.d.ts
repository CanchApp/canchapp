import { JqueryService } from './service/jquery-service.service';
import { Notifications } from './models/notification.model';
import * as i0 from "@angular/core";
export declare class NotificationService {
    private readonly jqueryService;
    private readonly $;
    constructor(jqueryService: JqueryService);
    /**
   * Genera una notificacion.
   * @param {Notifications}  notificacion - Objeto configuración de la notificación.
   */
    showCustomNotification(notification: Notifications): void;
    /**
     * Genera una notificacion con plantilla exitosa.
     * @param _message - Mensaje a mostrar en la notificación.
     */
    SuccesNotification(_message: string): void;
    /**
     * Genera una notificacion con plantilla informativa.
     * @param _title - Titulo de la notificación.
     * @param _message - Mensaje a mostrar en la notificación.
     */
    InfoNotification(_message: string): void;
    /**
   * Genera una notificacion con plantilla de error.
   * @param _title - Titulo de la notificación.
   * @param _message - Mensaje a mostrar en la notificación.
   */
    ErrorNotification(_message: string): void;
    /**
   * Genera una notificacion con plantilla de advertencia.
   * @param _title - Titulo de la notificación.
   * @param _message - Mensaje a mostrar en la notificación.
   */
    WarningNotification(_message: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NotificationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NotificationService>;
}
