import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { TodoComponent } from './todo/todo.component';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ModuleDialog}from './components/module-dialog/module-dialog.module';

import {TuiButtonModule, TuiRootModule, TuiSvgModule, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {TuiDataListWrapperModule, TuiInputModule, TuiTabsModule,TuiSelectModule} from "@taiga-ui/kit";
import {TuiAutoFocusModule} from "@taiga-ui/cdk";
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    TodoComponent,
        
  ],
    imports: [
        BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule, // Required by Taiga UI
        TuiRootModule, // Has to go after BrowserAnimationsModule
        RouterModule.forRoot([
            {path: '', component: HomeComponent, pathMatch: 'full'},
            {path: 'counter', component: CounterComponent},
            {path: 'fetch-data', component: FetchDataComponent},
            {path: 'todo', component: TodoComponent}
        ]),
        BrowserAnimationsModule,
        ModalModule.forRoot(),
        ModuleDialog,
        TuiSvgModule,
        TuiTabsModule,
        TuiButtonModule,
        TuiAutoFocusModule,
        TuiInputModule,
        TuiDataListWrapperModule,
        TuiTextfieldControllerModule,
        TuiSelectModule
    ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
