import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CompanyService } from '../../services/company.service';
import { CompanyDTO } from '../../models/company.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-company',
  imports: [TranslateModule, CommonModule, RouterLink],
  templateUrl: './list-company.component.html',
  styleUrl: './list-company.component.scss'
})
export class ListCompanyComponent implements OnInit {

  private readonly subscription: Subscription = new Subscription();
  
  companies: CompanyDTO[] | undefined;

  constructor(
    public translate: TranslateService,
    private readonly companyService: CompanyService) { }

  ngOnInit(): void {
    this.loadCompanies();
  }

  loadCompanies(): void {
    this.subscription.add(
      this.companyService.getAll().subscribe((companies: CompanyDTO[]) => {
        this.companies = [];
        this.companies = companies;
    }));
  }

}
