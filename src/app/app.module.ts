import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { TableProductComponent } from './componentes/table-product/table-product.component';
import { FormProductComponent } from './componentes/form-product/form-product.component';
import { EditProductComponent } from './componentes/edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TableProductComponent,
    FormProductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
