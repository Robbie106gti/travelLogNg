import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [  
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'feature1',
    loadChildren: () => import('@features/feature1/feature1.module').then(m => m.Feature1Module),
  },
  {
    path: 'feature2',
    loadChildren: () => import('@features/feature2/feature2.module').then(m => m.Feature2Module),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
