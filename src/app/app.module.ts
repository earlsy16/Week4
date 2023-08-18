import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import {FormsModule} from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { LoginService } from './services/login.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
