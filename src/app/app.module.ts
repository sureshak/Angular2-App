import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
  import{routes} from "./app.routes"
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { HomeComponent } from './home/home.component';
import { ListService } from './list/list.service';
import { CreateServiceService } from './create/create-service.service';
import { UpdateService } from './update/update.service';
import { DeleteService } from './delete/delete.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    UpdateComponent,
    DeleteComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routes
  ],
  providers: [ListService,CreateServiceService,UpdateService,DeleteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
