import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterMono20210222SharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [JhipsterMono20210222SharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class JhipsterMono20210222HomeModule {}
