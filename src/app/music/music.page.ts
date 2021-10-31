import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  templateUrl: './music.page.html',
  styleUrls: ['./music.page.css']
})
export class MusicPage implements OnInit {

  song;
  id;

  constructor(private route: ActivatedRoute, private data: DataService) { }


  ngOnInit(): void {
    this.route.params.subscribe(id => {
      this.id = id.id;
      this.song = this.data.list[this.id];
    });

  }

}
