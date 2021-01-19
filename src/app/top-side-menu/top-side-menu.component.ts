import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'top-side-menu',
  templateUrl: './top-side-menu.component.html',
  styleUrls: ['./top-side-menu.component.scss']
})
export class TopSideMenuComponent implements OnInit {
  
  public menuShow:boolean = false

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onMenu(){
    this.menuShow = !this.menuShow;
  }

  navRoute(local){
    this.router.navigate(['/'+local]);
  }

}
