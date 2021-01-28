import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  //{ path: "portfolio"},
  { path: "", component: AboutComponent },
  { path:"**", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [AboutComponent]
})
export class AppRoutingModule { }
