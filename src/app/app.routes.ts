import { Routes } from '@angular/router';
import { CoinListComponent } from './features/coins/pages/coin-list/coin-list.component';
import { CoinDetailComponent } from './features/coins/pages/coin-detail/coin-detail.component';

export const routes: Routes = [
  { path: '', component: CoinListComponent },
  { path: 'coin/:id', component: CoinDetailComponent }
];
