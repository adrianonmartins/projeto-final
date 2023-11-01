import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProductComponent } from './componentes/edit-product/edit-product.component';
import { FormProductComponent } from './componentes/form-product/form-product.component';
import { TableProductComponent } from './componentes/table-product/table-product.component';

const routes: Routes = [
  {path: '', redirectTo: '/produtos', pathMatch: 'full'},
  {path:'produtos', component: TableProductComponent},
  {path: 'cadastro', component: FormProductComponent},
  {path: 'editar', component: EditProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
