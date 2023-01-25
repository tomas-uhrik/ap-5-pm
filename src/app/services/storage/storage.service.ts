import {Injectable} from '@angular/core';
import {Preferences} from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  /**
   * Save data to key
   *
   * @param key
   * @param data
   */
  async setData(key: string, data: any) {
    await Preferences.set({
      // key: key,
      key,
      value: JSON.stringify(data),
    });
  }

  async removeData(key:string){
    await Preferences.remove({
      key
    });
  }

  /**
   * Get data from key
   *
   * @param key
   */
  async getData(key: string) {
    const {value} = await Preferences.get({
      key
    });
    //@ts-ignore
    return JSON.parse(value);
  }
}
