import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './pages/create/create.component';
import { HomeComponent } from './pages/home/home.component';
import { ViewComponent } from './pages/view/view.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'create', component: CreateComponent},
  {path: 'view', component: ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
