import { Component, OnInit, Input, HostListener } from '@angular/core';
import { ConnectService } from '../core/connect.service';

@Component({
  selector: 'app-releases',
  templateUrl: './releases.component.html',
  styleUrls: ['./releases.component.scss']
})
export class ReleasesComponent implements OnInit {

  @Input() release:any ;
  public baseURL = "http://sonoorarecords.com.br/api/";
  fotoUrl
  public fotos:any = [];
  public mobile:boolean = false;

  constructor(public connectService: ConnectService) { }

  ngOnInit() {
    this.getData();
    if (window.screen.width < 768) { // 768px portrait
      this.mobile = true;
    }else{
      this.mobile = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 768) { // 768px portrait
      this.mobile = true;
    }else{
      this.mobile = false;
    }
  }

  async getData(){
    await this.connectService.getReleasePicture(this.release.codigo).subscribe(res => {
      this.fotoUrl = this.baseURL+res[0].name_picture
    });

    await this.connectService.getReleasePicture(this.release.codigo).subscribe(res => {
      res = res.map(item => {
        item.name_picture = this.baseURL+item.name_picture;
        this.fotos.push(item)
      })
    });
  }

}
