import { OrgaosComponent } from './components/orgaos/orgaos.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsModule, IconsModule, MDBBootstrapModule, WavesModule } from 'angular-bootstrap-md';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ExpositorComponent } from './components/expositor/expositor.component';
import { LastnewsComponent } from './components/lastnews/lastnews.component';
import { DepoimentosComponent } from './components/depoimentos/depoimentos.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { FaleConoscoComponent } from './components/fale-conosco/fale-conosco.component';
import { FooterComponent } from './components/footer/footer.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormVerifCpfComponentComponent } from './components/form-verif-cpf-component/form-verif-cpf-component.component';
// MDB Angular Pro

import { NgxMaskModule } from 'ngx-mask';
import { FormcadastroComponent } from './components/formcadastro/formcadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';
import { TermoComponent } from './components/termo/termo.component';
import { FinalComponent } from './components/final/final.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    AboutusComponent,
    ExpositorComponent,
    LastnewsComponent,
    DepoimentosComponent,
    SubscribeComponent,
    FaleConoscoComponent,
    FooterComponent,
    FormVerifCpfComponentComponent,
    FormcadastroComponent,
    ModalComponent,
    TermoComponent,
    FinalComponent,
    OrgaosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    ButtonsModule.forRoot(),
    IconsModule,
    MatDialogModule,
    WavesModule.forRoot(),
    NoopAnimationsModule,
    NgxMaskModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  entryComponents: [
    ModalComponent,
    FormcadastroComponent,
    FormVerifCpfComponentComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
