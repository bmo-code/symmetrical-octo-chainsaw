import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ModalComponent } from './modal/modal.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {WaiterModule} from './waiter/waiter.module';
import {ItemModuleModule} from './item-module/item-module.module';
import {WaiterComponent} from './waiter/waiter.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ModalComponent,
    HomeComponent,
    PageNotFoundComponent,
    WaiterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    WaiterModule,
    ItemModuleModule
  ],
  entryComponents: [
    ModalComponent
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
