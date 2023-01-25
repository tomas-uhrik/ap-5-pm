import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiService} from "../services/api/api.service";
import {ModalController, NavController, Platform} from "@ionic/angular";
import {StorageService} from "../services/storage/storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  search_data : any = [];

  constructor(private http : HttpClient,
              private apiService: ApiService,
              private modalCtrl: ModalController,
              private storageService : StorageService,
              private plt : Platform,
              public navCtrl : NavController,
              private router : Router) {}



  search(value : any){
    if(value.detail.value != ''){
      this.apiService.search(value.detail.value).then(res =>{

        res.subscribe(data => {

          this.search_data = data.body;

        })
      })
    }

  }




}
