import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { TasknewComponent } from './tasknew/tasknew.component';
import { TaskdetailComponent } from './taskdetail/taskdetail.component';

const routes:Routes = [
  { path: '', redirectTo: '/tasklist', pathMatch: 'full' },
  { path: 'tasklist', component: TasklistComponent },
  { path: 'task/:id', component: TaskdetailComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TasklistComponent,
    TasknewComponent,
    TaskdetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
