import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';
import { ArtistComponent } from './artist/artist.component';
import { ListArtistsComponent } from './list-artists/list-artists.component';
import { ListReleasesComponent } from './list-releases/list-releases.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
  { path: 'releases', component: ListReleasesComponent },
  { path: 'artists', component: ListArtistsComponent },
  { path: 'artists/:cod', component: ArtistComponent },
  { path: 'store', component: StoreComponent },
  { path: 'demos', component: DemoComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/releases', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
