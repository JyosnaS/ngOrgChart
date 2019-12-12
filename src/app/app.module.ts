import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatLoginComponent } from './mat-login/mat-login.component';
import {MatInputModule} from '@angular/material/input';
import { CanvasComponent } from './canvas/canvas.component';
import { ItemCardComponent } from './canvas/item-card/item-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MatLoginComponent,
    CanvasComponent,
    ItemCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
