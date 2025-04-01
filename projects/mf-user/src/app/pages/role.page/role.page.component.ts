import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionEnum } from 'commons-lib';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RoleComponent } from '../../components/role/role.component';

@Component({
  selector: 'app-user.page',
  standalone: true,
  imports: [RoleComponent, TranslateModule],
  templateUrl: './role.page.component.html',
  styleUrl: './role.page.component.css'
})
export class RolePageComponent implements OnInit {
  roleId!: number;
  action!: ActionEnum;
  title: string = '';

  constructor(
    public translate: TranslateService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.roleId = Number(params.get('id'));
    });
    this.action = this.route.snapshot.data['actionState'];

    this.setTitle();
  }

  setTitle(): void {
    switch(this.action) {
      case ActionEnum.Create:
        this.title = 'Role.Create';
        break;
      case ActionEnum.Edit: 
        this.title = "Role.Edit";
        break;
    } 
  }
}
