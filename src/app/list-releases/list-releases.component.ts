import { Component, OnInit, HostListener } from '@angular/core';
import { ConnectService } from '../core/connect.service';

@Component({
  selector: 'app-list-releases',
  templateUrl: './list-releases.component.html',
  styleUrls: ['./list-releases.component.css']
})
export class ListReleasesComponent implements OnInit {

  constructor(public connectService: ConnectService) { }

  public releaseList = [];
  public release;
  public baseURL = "http://sonoorarecords.com.br/api/";
  public mobile:boolean = false;

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
    let idsList = [];
    await this.connectService.getAllReleases().subscribe(res => {
      this.releaseList = res
      res.map(item => {
        idsList.push(item.codigo)
      })

      if(res && idsList){
        this.connectService.getReleasePictureByList(idsList).subscribe(result => {
          result.map(item => {
            this.releaseList.map(sub => {
              if(item.cod_release == sub.codigo){
                sub.name_picture = this.baseURL+item.name_picture
              }
            })
          })
        });
      }
    });

    
  }

  getRelease(obj){
    this.release = obj;
  }

}
