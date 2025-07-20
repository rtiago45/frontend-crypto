import { Injectable } from '@angular/core'; // Permite que esta classe seja injetável (DI no Angular)
import { HttpClient } from '@angular/common/http'; // Cliente HTTP do Angular (equivalente ao WebClient no Spring)
import { Observable } from 'rxjs'; // Observable representa dados assíncronos


export interface Coin {
  id: string;
  name: string;
  symbol: string;
  currentPrice: number;
  marketCap: number;
  image: string;
  priceChangePercentage24h: number;
}

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  private apiUrl = 'http://localhost:8080/api/coins';

  constructor(private http: HttpClient) { }

  getCoins(): Observable<Coin[]> {
    return this.http.get<Coin[]>(this.apiUrl);
  }

  getCoinById(id: string): Observable<Coin> {
    return this.http.get<Coin>(`${this.apiUrl}/${id}`);
  }

}
