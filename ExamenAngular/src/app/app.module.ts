import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CocheComponent } from './coches/coche/coche.component';
import { CochesFormComponent } from './cochesForm/coches-form/coches-form.component';
import { FormsModule } from '@angular/forms';
import { FinalComponent } from './final/final.component';

@NgModule({
  declarations: [
    AppComponent,
    CocheComponent,
    CochesFormComponent,
    FinalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
