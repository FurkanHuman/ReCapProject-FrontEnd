import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';

const routes: Routes =
  [
    { path: "", pathMatch: "full", component: CarComponent },
    { path: "car", component: CarComponent },
    { path: "car/getbycolor/:colorId", component: CarComponent },
    { path: "car/getbybrand/:brandId", component: CarComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
