import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest, HttpResponse} from "@angular/common/http";
import {environment} from '../../../environments/environment';

import {LoadingController, Platform} from "@ionic/angular";
import {StorageService} from "../storage/storage.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {Albums, Artists, Releases} from "../../models/playlists.model";

export interface authResponse{
  access_token:any,
  expires_in:any,
  token_type:any,
}


@Injectable({
  providedIn: 'root'
})
export class ApiService {


  // @ts-ignore
  token: string;

  constructor(
    private http: HttpClient,
    private loadingCtrl : LoadingController,
    private storageService : StorageService,
    private plt : Platform,
    public router : Router
  ) {

      this.init();
  }


  async init(){
    if(!this.token){
      await this.setToken();
    }
  }

  setToken(){
    this.getAccessToken().subscribe( data =>{
        this.token = data.access_token;
      })
  }

  getAccessToken() {
    return this.http.post<authResponse>(environment.api.tokenUrl, 'grant_type=client_credentials', {
      headers: new HttpHeaders({
        Authorization:
          'Basic  ' + btoa(environment.api.clientId + ':' + environment.api.clientSecret),
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
      responseType:"json",
    });
  }

  getAlbums() : Observable<Albums>{


    let url = "https://api.spotify.com/v1/albums?ids=309KOMEivisMmBuzk09635,0xbuJLlb5afBcmCpdOaszR,7I9Wh2IgvI3Nnr8Z1ZSWby,5S3gls8Kjn8KVmqlIDEBbO,1rG6IgNdwE1IGFuIKuYosz"
    return this.http.get<Albums>(url, {
      headers: new HttpHeaders({
        Authorization: 'Bearer '+this.token,
        'Content-Type': 'application/json',
      }),
      responseType:"json",
    });

  }

  getArtists() : Observable<Artists>{


    let url = "https://api.spotify.com/v1/artists?ids=6mdiAmATAx73kdxrNrnlao,60d24wfXkVzDSfLS6hyCjZ,1l2ekx5skC4gJH8djERwh1,1Cs0zKBU1kc0i8ypK3B9ai,711MCceyCBcFnzjGY4Q7Un"
    return this.http.get<Artists>(url, {
      headers: new HttpHeaders({
        Authorization: 'Bearer '+this.token,
        'Content-Type': 'application/json',
      }),
      responseType:"json",
    });

  }

  getNewReleases() : Observable<Releases>{


    let url = "https://api.spotify.com/v1/browse/new-releases"
    return this.http.get<Releases>(url, {
      headers: new HttpHeaders({
        Authorization: 'Bearer '+this.token,
        'Content-Type': 'application/json',
      }),
      responseType:"json",
    });

  }

  getAlbumTracks(id : any){

    let url = "https://api.spotify.com/v1/albums/"+id+"/tracks"
    return this.http.get(url, {
      headers: new HttpHeaders({
        Authorization: 'Bearer '+this.token,
        'Content-Type': 'application/json',
      }),
      responseType:"json",
    });
  }




  callApi(method:any,url:any,body:any){

    return this.http.request(method,url, {
      body : body,
      headers: new HttpHeaders({
        Authorization: 'Bearer '+this.token,
        'Content-Type': 'application/json',
      }),
      responseType:"json",
      observe : "response"
    });
  }


  async search(query : any){
    let method = 'GET';
    let url = `https://api.spotify.com/v1/search?q=${query}&type=album,track,artist,playlist&include_external=audio`;
    let body = null;
    return  this.callApi(method, url, body);
  }










}
