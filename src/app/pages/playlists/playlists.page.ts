import { Component, OnInit } from '@angular/core';
import {NavController, NavParams} from "@ionic/angular";
import {ActivatedRoute} from "@angular/router";
import SpotifyWebApi from "spotify-web-api-js";
import {ApiService} from "../../services/api/api.service";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.page.html',
  styleUrls: ['./playlists.page.scss'],
})
export class PlaylistsPage implements OnInit {
  playlist : any = [];
  playlistInfo : any = null;
  tracks : any = [];
  constructor(private route: ActivatedRoute, private apiService:ApiService) {}

  ngOnInit() {
  }

}
