import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SdcbikewalaRoutingModule } from './sdcbikewala-routing.module';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FlashCardComponent } from './home/flash-card/flash-card.component';
import { TrendingsComponent } from './home/trendings/trendings.component';
import { OffersComponent } from './home/offers/offers.component';
import { TopsellerPartsComponent } from './home/topseller-parts/topseller-parts.component';
import { CategoryComponent } from './home/category/category.component';
import { ImportantLinksComponent } from './home/important-links/important-links.component';
import { TopsellerClothingComponent } from './home/topseller-clothing/topseller-clothing.component';
import { BrandsComponent } from './home/brands/brands.component';
import { SuggestionsComponent } from './home/suggestions/suggestions.component';
import { EndingsComponent } from './home/endings/endings.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavComponent,
    FlashCardComponent,
    TrendingsComponent,
    OffersComponent,
    TopsellerPartsComponent,
    CategoryComponent,
    ImportantLinksComponent,
    TopsellerClothingComponent,
    BrandsComponent,
    SuggestionsComponent,
    EndingsComponent
  ],
  imports: [
    CommonModule,
    SdcbikewalaRoutingModule
  ]
})
export class SdcbikewalaModule { }
