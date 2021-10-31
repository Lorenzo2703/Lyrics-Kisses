import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  templateUrl: './text.page.html',
  styleUrls: ['./text.page.css']
})
export class TextPage implements OnInit {

  list = [];

  constructor(private data: DataService) { }


  ngOnInit(): void {
    for (const i in this.data.list) {
      if (Object.prototype.hasOwnProperty.call(this.data.list, i)) {
        if (i !== 'default' && i !== 'length') {
          this.list.push(this.data.list[i]);
        }
      }
    }
  }

}
