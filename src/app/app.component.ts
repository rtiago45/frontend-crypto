import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // 🔔 Import necessário para router-outlet!

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // 🔥 Adiciona aqui!
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend-crypto';
}
