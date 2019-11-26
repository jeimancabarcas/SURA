import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './header/menu/menu.component';
import { TopBarComponent } from './header/top-bar/top-bar.component';
import { SliderComponent } from './slider/slider.component';
import { CustomerCounterComponent } from './customer-counter/customer-counter.component';
import { ContentComponent } from './content/content.component';
import { FeaturesComponent } from './content/features/features.component';
import { TabComponent } from './content/tab/tab.component';
import { PricingComponent } from './content/pricing/pricing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    TopBarComponent,
    SliderComponent,
    CustomerCounterComponent,
    ContentComponent,
    FeaturesComponent,
    TabComponent,
    PricingComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
