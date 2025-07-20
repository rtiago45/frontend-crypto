import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CoinService, Coin } from '../../../../core/services/coin.service';

@Component({
  selector: 'app-coin-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coin-detail.component.html',
  styleUrls: ['./coin-detail.component.scss']
})
export class CoinDetailComponent implements OnInit {
  coin!: Coin | null;

  constructor(
    private route: ActivatedRoute,
    private coinService: CoinService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.coinService.getCoinById(id).subscribe({
        next: (data) => this.coin = data,
        error: (err) => console.error('Erro ao carregar moeda:', err)
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
