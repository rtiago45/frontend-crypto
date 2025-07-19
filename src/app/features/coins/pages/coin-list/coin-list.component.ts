import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CoinService, Coin } from '../../../../core/services/coin.service';

@Component({
  selector: 'app-coin-list',
  standalone: true,          // ESSENCIAL
  imports: [CommonModule, FormsModule], // ESSENCIAL
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss']
})
export class CoinListComponent implements OnInit {  // 🔔 ATENÇÃO: export class!

  coins: Coin[] = [];
  searchTerm: string = '';

  constructor(private coinService: CoinService) {}

  ngOnInit(): void {
    this.loadCoins();
  }

  loadCoins(): void {
    this.coinService.getCoins().subscribe({
      next: (data) => {
        this.coins = data;
      },
      error: (err) => {
        console.error('Erro ao carregar moedas:', err);
      }
    });
  }

  get filteredCoins(): Coin[] {
    if (!this.searchTerm) {
      return this.coins;
    }
    return this.coins.filter(coin =>
      coin.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
