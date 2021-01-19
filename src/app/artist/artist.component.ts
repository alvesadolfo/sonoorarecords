import { Component, OnInit, Input, HostListener } from '@angular/core';
import { ConnectService } from '../core/connect.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  constructor(
      public connectService: ConnectService, 
      private router: Router,
      private route: ActivatedRoute
    ) {
    this.route.params.subscribe(res => this.cod_artist = res.cod);
  }

  public artist:any = [];
  public baseURL = "http://sonoorarecords.com.br/api/";
  public perfilUrl;
  public fotos:any = [];
  public cod_artist;
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
    await this.connectService.getArtist(this.cod_artist).subscribe(res => {
      console.log(res)
      this.artist = res[0]

      this.connectService.getPerfilPicture(this.artist.codigo).subscribe(res => {
        this.perfilUrl = this.baseURL+res[0].name_picture
      });
  
      this.connectService.getArtistPicture(this.artist.codigo).subscribe(res => {
        res = res.map(item => {
          item.name_picture = this.baseURL+item.name_picture;
          this.fotos.push(item)
        })
      });
    });

    
  }

  bookNow(){
    this.router.navigate(['/contact']);
  }

}
