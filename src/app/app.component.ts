import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sonoora Records';

  public rota: string = "releases"

  public navRoute(route){
    this.rota = route;
  }

}
