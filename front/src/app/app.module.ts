import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { NavigationComponent } from './components/navigation/navigation.component'; 
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';

//Material

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
