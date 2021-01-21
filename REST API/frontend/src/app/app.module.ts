import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AddComponent } from './add/add.component';
import { HeaderComponent } from './header/header.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { NoteServices } from './shared/note.service';
import { ArchiveComponent } from './archive/archive.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AddComponent,
    HeaderComponent,
    ArchiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [NoteServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
