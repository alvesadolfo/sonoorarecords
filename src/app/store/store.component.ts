import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  public mobile:boolean = false;

  constructor() { }

  ngOnInit() {
    this.goToStore();

    if (window.screen.width < 768) { // 768px portrait
      this.mobile = true;
    }else{
      this.mobile = false;
    }
  }

  goToStore() : void {
    window.location.href = "https://sonoorahigh.minhalojanouol.com.br/";
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 768) { // 768px portrait
      this.mobile = true;
    }else{
      this.mobile = false;
    }
  }

}
