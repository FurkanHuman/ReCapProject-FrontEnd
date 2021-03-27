import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';

const routes: Routes =
  [
    { path: "", pathMatch: "full", component: CarComponent },
    { path: "car", component: CarComponent },
    { path: "car/getbycolor/:colorId", component: CarComponent },
    { path: "car/getbybrand/:brandId", component: CarComponent },
    { path: "cars/cardetail/:carId", component: CarDetailComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
