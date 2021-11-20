import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './views/header/header.component';
import { MatIconModule } from "@angular/material/icon";
import { NavbarComponent } from './views/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './views/home/home.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { MatCardActions, MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { FooterComponent } from './views/footer/footer.component';
import { LoginComponent } from './views/login/login.component';
import { ProdutosComponent } from './views/produtos/produtos.component';
import { MontagemComponent } from './views/montagem/montagem.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    ProdutosComponent,
    MontagemComponent,
  ],
  imports: [
    CarouselModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    MatTooltipModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}
