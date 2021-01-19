import { Component, OnInit, HostListener } from '@angular/core';
import { ConnectService } from '../core/connect.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-artists',
  templateUrl: './list-artists.component.html',
  styleUrls: ['./list-artists.component.css']
})
export class ListArtistsComponent implements OnInit {

  constructor(public connectService: ConnectService,private router: Router) { }

  public artistList = [];
  public artist;
  public baseURL = "http://sonoorarecords.com.br/api/";
  public exclusive:boolean = false;
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
    await this.connectService.getAllArtists().subscribe(res => {
      let indexNenhum = res.findIndex(item=>item.name == 'Nenhum')
      res.splice(indexNenhum, 1);
      this.artistList = res
      res.map(item => {
        idsList.push(item.codigo)
        
        item.exclusive = item.exclusive == 'f' ? false : true;
      })

      if(res && idsList){
        this.connectService.getPerfilPictureByList(idsList).subscribe(result => {
          result.map(item => {
            this.artistList.map(sub => {
              if(item.cod_artist == sub.codigo){
                sub.name_picture = this.baseURL+item.name_picture
              }
            })
          })
        });
      }
    });

    
  }

  getArtist(obj){
    //this.artist = obj;
    this.router.navigate(['/artists/'+obj.codigo]);
  }

}
