import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-side-menu',
  templateUrl: './left-side-menu.component.html',
  styleUrls: ['./left-side-menu.component.scss']
})
export class LeftSideMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navRoute(local){
    this.router.navigate(['/'+local]);
  }

}
