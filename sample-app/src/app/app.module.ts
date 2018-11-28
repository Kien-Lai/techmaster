import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UiModule } from "./ui/ui.module";
import { RouterModule } from "@angular/router";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from "./guards/auth-guard.service";
import { LoginService } from "./services/login.service";

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, UiModule, FormsModule, ReactiveFormsModule],
  providers: [AuthGuardService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {}
