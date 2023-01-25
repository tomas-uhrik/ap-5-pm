import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlbumsPageRoutingModule } from './albums-routing.module';

import { AlbumsPage } from './albums.page';
import {SharedDirectivesModule} from "../../directives/shared-directives.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AlbumsPageRoutingModule,
        SharedDirectivesModule
    ],
  declarations: [AlbumsPage]
})
export class AlbumsPageModule {}
