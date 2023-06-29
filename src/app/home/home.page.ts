/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable guard-for-in */
/* eslint-disable prefer-const */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  list = [];
  list1 = [];
  list2 = [];
  list3 = [];
  special = this.data.list[53];

  dedicatedSong;

  constructor(private router: Router, private data: DataService) { }


  ngOnInit(): void {
    for (let i in this.data.list) {
      if (Object.prototype.hasOwnProperty.call(this.data.list, i)) {
        if (i !== "default" && i !== "length") {
          this.list.push(this.data.list[i]);
        }
      }
    }

    this.list1 = this.list.slice(0, 17);
    this.list2 = this.list.slice(17, 34);
    this.list3 = this.list.slice(34, 53);
    this.dedicatedSong = this.data.list[Math.floor(Math.random() * 52)];
  }

  openSong(id: number) {
    this.router.navigate(['id', id]);
  }

  text() {
    this.router.navigateByUrl("text");
  }

}
