import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-module-list',
  imports: [TranslateModule, RouterLink],
  templateUrl: './module-list.page.component.html',
  styleUrl: './module-list.page.component.scss'
})
export class ModuleListPageComponent {

}
