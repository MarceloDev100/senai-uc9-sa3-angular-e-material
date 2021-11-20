import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { MontagemComponent } from './views/montagem/montagem.component';
import { ProdutosComponent } from './views/produtos/produtos.component';


const routes: Routes = [
   { path: "" , component: HomeComponent },
   { path: "login", component: LoginComponent },
   { path: "produtos", component: ProdutosComponent },
   { path: "montagem", component: MontagemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }