import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilsComponent } from './app-components/utils/utils.component';
import { ShopComponent } from './app-components/shop/shop.component';
import { FaqComponent } from './app-components/faq/faq.component';
import { BoardComponent } from './app-components/board/board.component';
import { ContactComponent } from './app-components/contact/contact.component';
import { SignInComponent } from './app-components/sign-in/sign-in.component';
import { SignOutComponent } from './app-components/sign-out/sign-out.component';
import { AdminComponent } from './app-components/admin/admin.component';
import { ErrorsComponent } from './app-components/errors/errors.component';
import { HeaderComponent } from './app-components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    UtilsComponent,
    ShopComponent,
    FaqComponent,
    BoardComponent,
    ContactComponent,
    SignInComponent,
    SignOutComponent,
    AdminComponent,
    ErrorsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
