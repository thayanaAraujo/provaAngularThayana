import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlocksComponent } from './pages/blocks/blocks.component';
import { CardComponent } from './pages/card/card.component';
import { FormsComponent } from './pages/forms/forms.component';
import { IndexComponent } from './pages/index/index.component';
import { PricingComponent } from './pages/pricing/pricing.component';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent 
},
{
  path: 'blocks',
  component: BlocksComponent 
},
{
  path: "card",
  component: CardComponent 
},
{
  path: "forms",
  component: FormsComponent 
},

{
  path: "pricing",
  component: PricingComponent 
},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


