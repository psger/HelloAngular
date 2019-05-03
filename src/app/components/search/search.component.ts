import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public keyWord: string;
  public keyList: any[] = [];
  constructor() { }

  ngOnInit() {
  }

  doSearch() {
// tslint:disable-next-line: triple-equals
    if (this.keyList.indexOf(this.keyWord) == -1) { // 不存在
        this.keyList.push(this.keyWord);
    }
    console.log(this.keyWord);
    this.keyWord = '';
  }

  doDelete(key) {
    this.keyList.splice(key, 1);
  }

}
