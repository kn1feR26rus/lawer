import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { IntroComponent } from './components/main/intro/intro.component';
import { AboutComponent } from './components/main/about/about.component';
import { InfoComponent } from './components/main/info/info.component';
import { ReviewsComponent } from './components/main/reviews/reviews.component';
import { ContactsComponent } from './components/main/contacts/contacts.component';
import { AmenitiesComponent } from './components/main/amenities/amenities.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    IntroComponent,
    AboutComponent,
    InfoComponent,
    ReviewsComponent,
    ContactsComponent,
    AmenitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
