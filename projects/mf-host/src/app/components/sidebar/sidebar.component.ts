import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PermissionModule } from 'commons-lib';
import { MenuItem } from '../../models/base-menu';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  private sideMenuUrl: string = 'assets/data/side-menu.json';
  public sideMenuData: MenuItem[] = [];

  constructor(private http: HttpClient){
    this.createMenu();
  }

  createMenu() {
    this.http.get<MenuItem[]>(this.sideMenuUrl).subscribe(data => this.mapMenuItems(data));
  }

  mapMenuItems(menu: MenuItem[]) {
    const userModules = JSON.parse(localStorage.getItem("ROLES_MODULES")!) as PermissionModule[];
    // Filtrar los módulos a los que el usuario tiene acceso (actions.read === true)
    const allowedModules = userModules.filter(module => module.actions.read).map(module => module.moduleName);

    this.sideMenuData = this.filterMenu(menu, allowedModules);
  }

  filterMenu(menu: MenuItem[], allowedModules: string[]): MenuItem[] {
    return menu.map(item => {
      // Si el módulo está en la lista de permitidos, lo mantenemos
        if (item.modules.some(module => allowedModules.includes(module))) {
          let newItem = { ...item };
          
          // Si tiene submenús, filtramos recursivamente
          if (newItem?.subMenu) {
              newItem.subMenu = this.filterMenu(newItem.subMenu, allowedModules);
          }
          return newItem;
        }
        return null;
      })
      .filter((item): item is MenuItem => item !== null); 
  }
}
