import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { CoinService, Coin } from '../../../../core/services/coin.service';

@Component({
  selector: 'app-coin-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss']
})
export class CoinListComponent implements OnInit {
  coins: Coin[] = [];
  searchTerm: string = '';

  constructor(
    private coinService: CoinService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCoins();
  }

  loadCoins(): void {
    this.coinService.getCoins().subscribe({
      next: (data) => this.coins = data,
      error: (err) => console.error('Erro ao carregar moedas:', err)
    });
  }

  get filteredCoins(): Coin[] {
    if (!this.searchTerm) return this.coins;
    return this.coins.filter(coin =>
      coin.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  goToDetail(id: string): void {
    this.router.navigate(['/coin', id]);
  }
}
