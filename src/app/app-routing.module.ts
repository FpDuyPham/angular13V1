import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  // { path: 'm-time-frame/:maxTimeFrame', loadChildren: () => import('./features/time-frame/time-frame.module').then(m => m.TimeFrameModule)},
  // { path: 'chart-watch-list', loadChildren: () => import('./features/chart-watch-list/chart-watch-list.module').then(m => m.ChartWatchListModule)},
  // { path: 'wallet', loadChildren: () => import('./features/wallet/wallet.module').then(m => m.WalletModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
