import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-soundcloud-player',
  templateUrl: './soundcloud-player.component.html',
  styleUrls: ['./soundcloud-player.component.css']
})
export class SoundcloudPlayerComponent implements OnInit {

  @Input() public track:string;
  @Input() public artist: boolean = false;
  public link;
  public linkArtist;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    if(this.track){
      this.link = "https://w.soundcloud.com/player/?url="+encodeURIComponent(this.track)+"&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true";
      this.linkArtist = "https://w.soundcloud.com/player/?url="+encodeURIComponent(this.track)+"&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true";
    }
    
  }

}
