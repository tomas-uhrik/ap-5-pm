import { Injectable } from '@angular/core';
import {StorageService} from "../storage/storage.service";
import {ReplaySubject} from "rxjs";
import {AlbumDetails} from "../../models/playlists.model";

export interface Option {
  name: string;
  homepage: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public detail : AlbumDetails = {
    id: "data",
    images: [
      {
        url: "data",
        height: 1,
        width: 1
      }
    ],
    name: "data",
    release_date: "data",
    type: "data",
    artists: [
      {
        name: "data",
        type: "data",
      }
    ],

    tracks: {
      items: [
        {
          images: [
            {
              url: "data",
              height: 1,
              width: 1
            },

          ],
          name: "data",
          artists: [
            {
              name: "data",
              type: "data",
            }
          ]
        }
      ],
    }
  };


  private privateOptions : Option[] = [
    {
      name : 'Albums',
      homepage : true
    },
    {
      name : 'Artists',
      homepage : true
    },
    {
      name : 'New Releases',
      homepage : true
    },
    {
      name : 'Your Playlists',

      homepage : false
    },

  ]

  private privateServiceSubject = new ReplaySubject<Option[]>(1);


  constructor(
    private storageService: StorageService

  ) {

    this.init();

  }

  get options$() {
    return this.privateServiceSubject.asObservable();
  }


  async init() {
    let options = await this.storageService.getData('options');
    if (!options) {
      options = this.privateOptions;
    }
    this.privateServiceSubject.next(options);
  }

  async setHomepage(index: number, active: boolean) {
    this.privateOptions[index].homepage = active;
    await this.storageService.setData('options', this.privateOptions);
    this.privateServiceSubject.next(this.privateOptions);
  }



}
