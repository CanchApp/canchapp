import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { BrowserModule, provideClientHydration } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { CatalogModule } from './catalog.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    CatalogModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
