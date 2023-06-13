import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuestionAnswearComponent } from './question-answear/question-answear.component';
import { FooterComponent } from './footer/footer.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { PhoneFramesComponent } from './phone-frames/phone-frames.component';
import { ListYourServiceComponent } from './list-your-service/list-your-service.component';
import { BottomNavigationComponent } from './bottom-navigation/bottom-navigation.component';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionAnswearComponent,
    FooterComponent,
    PhoneFramesComponent,
    ListYourServiceComponent,
    BottomNavigationComponent,
    BurgerMenuComponent
  ],
  imports: [
    BrowserModule,
    NgxUsefulSwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
