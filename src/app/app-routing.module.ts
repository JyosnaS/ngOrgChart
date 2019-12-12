import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatLoginComponent } from './mat-login/mat-login.component';
import { CanvasComponent } from './canvas/canvas.component';


const routes: Routes = [
  {
    path: "login",
    component: MatLoginComponent
  },
  {
    path: "canvas",
    component: CanvasComponent
  },
  {
    path:"**",
    redirectTo: "canvas"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
