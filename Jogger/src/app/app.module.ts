import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import {JoggerServiceService} from './jogger-service.service';
import { InsertComponent } from './insert/insert.component';
import{ ReactiveFormsModule} from'@angular/forms';
import { DisplayComponent } from './display/display.component';


const route : Routes =[
  {path:'',redirectTo:'Joggers',pathMatch:"full"},
  {path:'Joggers', component:DisplayComponent},
  {path:'Insert',component:InsertComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    InsertComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(route)
  ],
  providers: [JoggerServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
