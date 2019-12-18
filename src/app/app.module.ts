import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    ErrorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
