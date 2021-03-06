import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public keyWord = '';
  public todoList:any[] = [];
  public done:any[] = [];

  constructor(private storage: StorageService) { }

  ngOnInit() {
    this.todoList = this.storage.get('todoList');
    if (this.todoList == null) {
      this.todoList = [];
    }
  }

  todoAdd(e) {
    // 按下回车执行
    // console.log(e);
    if (e.keyCode === 13) {
          if (!this.ifExist(this.todoList, this.keyWord)) {
            this.todoList.push({
              title: this.keyWord,
              status: 0
            });
            } else {
              alert("任务已经存在!");
            }
          this.keyWord = '';
    }
    this.storage.set('todoList', this.todoList);
  }

  hasDo() {
    // this.done.push(this.todoList[key]);
    //this.todoList.splice(key, 1);
    this.storage.set('todoList', this.todoList);
  }

  // 异步的 会存在问题
  // ifExist(todoList, keyWord) {
  //   todoList.forEach(element => {
  //     if (element.title == keyWord) {
  //       return true;
  //     }
  //   });

  //   return false;
  // }

   ifExist(todoList, keyWord) {
// tslint:disable-next-line: prefer-for-of
     for (let i = 0; i < todoList.length; i++) {
      if (todoList[i].title === keyWord) {
              return true;
            }
     }
     return false;
   }

}
