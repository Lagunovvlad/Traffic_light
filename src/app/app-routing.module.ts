import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'red',
    loadChildren: () => import('./red/red.module').then( m => m.RedPageModule)
  },
  {
    path: '',
    redirectTo: 'red',
    pathMatch: 'full'
  },
  {
    path: 'red',
    loadChildren: () => import('./red/red.module').then( m => m.RedPageModule)
  },
  {
    path: 'yellow',
    loadChildren: () => import('./yellow/yellow.module').then( m => m.YellowPageModule)
  },
  {
    path: 'green',
    loadChildren: () => import('./green/green.module').then( m => m.GreenPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
