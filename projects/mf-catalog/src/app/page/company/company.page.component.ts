import { Component } from '@angular/core';
import { CompanyCustomerComponent } from "../../components/company-customer/company-customer.component";

@Component({
  selector: 'app-company',
  imports: [CompanyCustomerComponent],
  templateUrl: './company.page.component.html',
  styleUrl: './company.page.component.css'
})
export class CompanyPageComponent {

}
