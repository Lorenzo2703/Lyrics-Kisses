import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  templateUrl: './music.page.html',
  styleUrls: ['./music.page.css']
})
export class MusicPage implements OnInit, AfterViewInit {
  @ViewChild('audioElement') audioElement: ElementRef;

  song;
  id;
  audio;

  constructor(private route: ActivatedRoute, private router: Router, private data: DataService) { }


  ngOnInit(): void {
    this.route.params.subscribe(id => {
      this.id = id.id;
      this.song = this.data.list[this.id];
    });
  }

  ngAfterViewInit(): void {
    this.audio = this.audioElement.nativeElement as HTMLAudioElement;
    this.audio.onended = () => {
      this.router.navigate(['id', ((Number(this.id) + 1) % 53)], { replaceUrl: true });
    };
  }

  prev() {
    if (this.id != 0) {
      this.router.navigate(['id', ((Number(this.id) - 1) % 53)], { replaceUrl: true });
    }
    this.audio.pause();
    this.audio.currentTime = 0;
  }

  next() {
    this.router.navigate(['id', ((Number(this.id) + 1) % 53)], { replaceUrl: true });
    this.audio.pause();
    this.audio.currentTime = 0;
  }

}
