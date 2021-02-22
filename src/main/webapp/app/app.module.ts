import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhipsterMono20210222SharedModule } from 'app/shared/shared.module';
import { JhipsterMono20210222CoreModule } from 'app/core/core.module';
import { JhipsterMono20210222AppRoutingModule } from './app-routing.module';
import { JhipsterMono20210222HomeModule } from './home/home.module';
import { JhipsterMono20210222EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JhipsterMono20210222SharedModule,
    JhipsterMono20210222CoreModule,
    JhipsterMono20210222HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhipsterMono20210222EntityModule,
    JhipsterMono20210222AppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class JhipsterMono20210222AppModule {}
