import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api/api.service";
import {ActivatedRoute} from "@angular/router";

import {AlbumDetails} from "../../models/playlists.model";
import {SettingsService} from "../../services/settings/settings.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.page.html',
  styleUrls: ['./albums.page.scss'],
})
export class AlbumsPage implements OnInit {

  album !: AlbumDetails;


  constructor(private route: ActivatedRoute,private apiService:ApiService,private settingsService:SettingsService ) {


  }

  ngOnInit() {
    this.album = this.settingsService.detail;

  }

}
