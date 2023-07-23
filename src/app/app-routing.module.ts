import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "table-time"
  },
  {
    path: "table-time",
    loadChildren: () => import("./table-time/table-time.module").then(m => m.TableTimeModule),
    pathMatch:"full"
  },
  {
    path: "**",
    redirectTo: "table-time"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
