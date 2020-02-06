import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './Product-list/Product-list.component';
import { ProductSearcherComponent } from './product-searcher/product-searcher.component';


const routes: Routes = [
  {path:'',component:ProductListComponent},
  {path:'search',component:ProductSearcherComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
