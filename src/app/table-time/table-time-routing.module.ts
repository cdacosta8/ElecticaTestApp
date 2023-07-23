import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableTimeComponent } from './container/table-time/table-time.component';

const routes: Routes = [
  {
    path: "",
    component: TableTimeComponent
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableTimeRoutingModule { }
