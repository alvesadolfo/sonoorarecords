import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistComponent } from './artist/artist.component';
import { ReleasesComponent } from './releases/releases.component';
import { StoreComponent } from './store/store.component';
import { DemoComponent } from './demo/demo.component';
import { ContactComponent } from './contact/contact.component';
import { LinksComponent } from './links/links.component';
import { HttpClientModule } from '@angular/common/http';
import { ConnectService } from './core/connect.service';
import { ListArtistsComponent } from './list-artists/list-artists.component';
import { ListReleasesComponent } from './list-releases/list-releases.component';
import { LeftSideMenuComponent } from './left-side-menu/left-side-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SoundcloudPlayerComponent } from './soundcloud-player/soundcloud-player.component';
import { TopSideMenuComponent } from './top-side-menu/top-side-menu.component';
import { FooterMobileComponent } from './footer-mobile/footer-mobile.component';

@NgModule({
   declarations: [
      AppComponent,
      ArtistComponent,
      ReleasesComponent,
      StoreComponent,
      DemoComponent,
      ContactComponent,
      LinksComponent,
      ListArtistsComponent,
      ListReleasesComponent,
      LeftSideMenuComponent,
      SoundcloudPlayerComponent,
      TopSideMenuComponent,
      FooterMobileComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule
   ],
   providers: [
      ConnectService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
