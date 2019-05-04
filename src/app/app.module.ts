import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
// 引入表单相关的模块才可以使用双向绑定
import { FormsModule} from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { StorageService } from './services/storage.service';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SearchComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
