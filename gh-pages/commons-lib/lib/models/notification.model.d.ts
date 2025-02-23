import { NotificationTypeEnum, PlacementAlignEnum, PlacementFromEnum } from "../enum/commons.enum";
/**
 * @property {number} delay - Tiempo que demora en estar visible la notificación.
 * @property {string} title - Titulo a mostrar en la notificación.
 * @property {string} message Texto a mostrar en la notificación.
 * @property {string} icon Icono a mostrar en la notificación.
 * @property {NotificationType} type Tipo de notificación.
 * @property {PlacementFrom} placementFrom Colocación de la notificación.
 * @property {placementAlign} placementAlign Alineacion de la notificación.
 */
export declare class Notifications {
    delay: number;
    title: string;
    message: string;
    icon: string;
    type: NotificationTypeEnum;
    placementFrom: PlacementFromEnum;
    placementAlign: PlacementAlignEnum;
}
