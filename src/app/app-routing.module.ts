import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { ConfirmationComponent } from './component/confirm-order/confirma-order.component';
import { ProductDetailComponent } from './component/product-item-detail/product-item-detail.component';
import { ProductListComponent } from './component/product-list/product-list.component';

const routes: Routes = [
  {
    path: 'order/:fullName/:totalPrice',
    component: ConfirmationComponent,
  },
  { path: 'yourcart', component: CartComponent },
  { path: '', component: ProductListComponent },
  { path: 'product/:id', component: ProductDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
