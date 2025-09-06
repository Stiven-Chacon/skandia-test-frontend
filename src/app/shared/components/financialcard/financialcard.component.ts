import { Component } from '@angular/core';
import { FinancialData } from './financial-data.model';
import { FinancialService } from '../../../core/services/financial.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-financialcard',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './financialcard.component.html',
  styleUrl: './financialcard.component.scss'
})
export class FinancialcardComponent {
  data: FinancialData | null = null;
  loading = true;
  error = false;

  constructor(private financialService: FinancialService) { }

  ngOnInit(): void {
    this.fetchFinancialData();
  }

  fetchFinancialData(): void {
    this.financialService.getFinancialData().subscribe({
      next: (data) => {
        this.data = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching financial data:', err);
        this.error = true;
        this.loading = false;
      }
    });
  }

  formatCurrency(amount: string): string {
    const num = Number(amount);
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num).replace('COP', '$');
  }
}
