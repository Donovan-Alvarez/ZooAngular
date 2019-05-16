import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { ManagersComponent } from './components/managers/managers.component';
import { RestService } from './services/rest.service';
import { IndexComponent } from './components/index/index.component';
import { AddAnimalsComponent } from './components/add-animals/add-animals.component';
import { AddManagersComponent } from './components/add-managers/add-managers.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AnimalsComponent,
    ManagersComponent,
    IndexComponent,
    AddAnimalsComponent,
    AddManagersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [ RestService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
