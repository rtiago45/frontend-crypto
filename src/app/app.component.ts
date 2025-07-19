import { Component } from '@angular/core';
import { CoinListComponent } from './features/coins/pages/coin-list/coin-list.component';
import { HttpClientModule } from '@angular/common/http';  // 🔔 Importação do módulo HTTP

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CoinListComponent, HttpClientModule],  // 🔔 Adicione aqui
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
