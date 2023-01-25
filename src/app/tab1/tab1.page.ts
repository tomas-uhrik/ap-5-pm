import {Component} from '@angular/core';
import {ApiService} from '../services/api/api.service';
import { ModalController, NavController, Platform} from '@ionic/angular';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {StorageService} from "../services/storage/storage.service";
import {Router} from "@angular/router";
import {SettingsPage} from "../pages/settings/settings.page";
import {SettingsService} from "../services/settings/settings.service";
import {Observable} from "rxjs";
import {AlbumDetails, Albums, Artists, Releases} from "../models/playlists.model";


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  loading : HTMLIonLoadingElement | undefined;
  album : any [] = [];

  albums$: Observable<Albums>[] = [];
  artists$: Observable<Artists>[] = [];
  releases$: Observable<Releases>[] = [];



  opts = {
    slidesPerView: 2.4,
    spaceBetween: 20,
    freeMode: true
  };

  constructor(
    // get custom Service from DI
    private http : HttpClient,
    private apiService: ApiService,
    private modalCtrl: ModalController,
    private storageService : StorageService,
    private plt : Platform,
    public navCtrl : NavController,
    private router : Router,
    private settingsService: SettingsService,

  ) {

  }

  openSettings() {
    this.openModal();
  }


  async openModal() {
    const modal = await this.modalCtrl.create({
      component: SettingsPage,
    });

    await modal.present();
    await modal.onWillDismiss();
  }




initPlaylists() {

  this.settingsService.options$.subscribe(places => {
    this.albums$ = [];
    this.artists$ = [];
    this.releases$ = [];
    places.forEach(place => {
      if(place.homepage){
        switch (place.name) {
          case 'Albums':
            this.albums$.push(this.apiService.getAlbums());
            break;

          case 'Artists':
            this.artists$.push(this.apiService.getArtists());
            break;

          case 'New Releases':
            this.releases$.push(this.apiService.getNewReleases());
            break;


        }
      }
    });
  });

  }
  load(data : AlbumDetails){
    this.settingsService.detail = data;
  }

  loadData(){
    this.initPlaylists();
  }

}
