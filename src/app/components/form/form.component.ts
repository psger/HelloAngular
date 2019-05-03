import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public peopleInfo: any = {
    userName: '',
    sex: '1',
    cityList: ['武汉', '上海', '深圳', '北京'],
    city: '北京',
    hobbies: [
      {title: '摄影', checked: false},
      {title: '羽毛球', checked: true}
    ],
    mark: ''
  };

  constructor() { }

  ngOnInit() {
  }

  doSubmit() {
      console.log(this.peopleInfo)
  }

}
