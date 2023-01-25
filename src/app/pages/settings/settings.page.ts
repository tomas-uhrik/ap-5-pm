import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Option, SettingsService} from "../../services/settings/settings.service";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  options: Option[] = [];

  form!: FormGroup;


  constructor(
              private settingsService: SettingsService,
              private fb: FormBuilder,
              private modalCtrl: ModalController,) {

  }

  async dismiss() {
    // dismiss modal
    await this.modalCtrl.dismiss();
  }



  ngOnInit() {
    this.settingsService.options$.subscribe(options => {
      this.options = options;

      // create form hardcoded
      this.form = this.fb.group({
        ch1: [this.options[0].homepage, []],
        ch2: [this.options[1].homepage, []],
        ch3: [this.options[2].homepage, []],
        ch4: [this.options[3].homepage, []],

      });
    });


    this.form.valueChanges.subscribe(data => {
      // set every hardcoded place to save active state

      this.settingsService.setHomepage(0, data.ch1);
      this.settingsService.setHomepage(1, data.ch2);
      this.settingsService.setHomepage(2, data.ch3);
      this.settingsService.setHomepage(3, data.ch4);

    });




  }

}
