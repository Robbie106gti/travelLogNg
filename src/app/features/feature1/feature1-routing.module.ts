import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { View404Component } from "@shared/view404/view404.component";
import { Feature1Component } from "./views/feature1/feature1.component";
import { IdFeature1Component } from "./views/id-feature1/id-feature1.component";
import { NewFeature1Component } from "./views/new-feature1/new-feature1.component";

const routes: Routes = [
  {
    path: '',
    component: Feature1Component,
    pathMatch: 'full',
  },
  {
    path: 'new',
    component: NewFeature1Component,
    pathMatch: 'full',
  },
  {
    path: 'unit',
    children: [
      {
        path: ':id',
        component: IdFeature1Component,
      }
    ]
  },
  {
    path: '**',
    component: View404Component
  }
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule],
})
export class Feature1RoutingModule {}