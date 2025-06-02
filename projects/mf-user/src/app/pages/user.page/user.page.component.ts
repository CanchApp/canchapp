import { Component, OnInit } from '@angular/core';
import { UserComponent } from "../../components/user/user.component";
import { ActivatedRoute } from '@angular/router';
import { ActionEnum } from 'commons-lib';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-user.page',
    imports: [UserComponent, TranslateModule],
    templateUrl: './user.page.component.html',
    styleUrl: './user.page.component.css'
})
export class UserPageComponent implements OnInit {
  userId!: number;
  action!: ActionEnum;
  title: string = '';

  constructor(
    public translate: TranslateService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.userId = Number(params.get('id'));
    });
    this.action = this.route.snapshot.data['actionState'];

    this.setTitle();
  }

  setTitle(): void {
    switch(this.action) {
      case ActionEnum.Create:
        this.title = 'User.Create';
        break;
      case ActionEnum.Edit: 
        this.title = "User.Edit";
        break;
    } 
  }
}
