import {Component, ViewChild} from '@angular/core';

import {ApiService} from "../services/api/api.service";
import {StorageService} from "../services/storage/storage.service";
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  loggedIn = false;
  constructor(private apiService: ApiService,private storageService:StorageService, private router:Router) {

  }

  ngOnInit(){

  }
}
