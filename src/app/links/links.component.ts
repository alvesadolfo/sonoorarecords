import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

  @Input() instagram:string;
  @Input() facebook:string;
  @Input() youtube:string;
  @Input() soundcloud:string;
  @Input() beatport:string;

  constructor() { }

  ngOnInit() {
  }

}
