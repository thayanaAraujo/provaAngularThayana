import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IndexComponent } from './pages/index/index.component';
import { BlocksComponent } from './pages/blocks/blocks.component';
import { CardComponent } from './pages/card/card.component';
import { FormsComponent } from './pages/forms/forms.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    BlocksComponent,
    CardComponent,
    FormsComponent,
    PricingComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
