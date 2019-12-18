import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './app-components/shop/shop.component';
import { FaqComponent } from './app-components/faq/faq.component';
import { BoardComponent } from './app-components/board/board.component';
import { ContactComponent } from './app-components/contact/contact.component';
import { SignInComponent } from './app-components/sign-in/sign-in.component';
import { SignOutComponent } from './app-components/sign-out/sign-out.component';
import { AdminComponent } from './app-components/admin/admin.component';
import { ErrorsComponent } from './app-components/errors/errors.component';


const routes: Routes = [
  { path: '',         redirectTo: '/Shop',    pathMatch: 'full' },
  { path: 'Shop',                   component: ShopComponent    },
  { path: 'Faq',                    component: FaqComponent     },
  { path: 'Board',                  component: BoardComponent   },
  { path: 'Contact',                component: ContactComponent },
  { path: 'SignIn',                 component: SignInComponent  },
  { path: 'SignOut',                component: SignOutComponent },
  { path: 'Admin',                  component: AdminComponent   },
  { path: 'Errors',                 component: ErrorsComponent  },
  { path: '**',       redirectTo: 'Errors'                      }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

