import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { DashboardModule } from './dashboard.module';

@NgModule({ declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        CommonModule,
        AppRoutingModule,
        DashboardModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
