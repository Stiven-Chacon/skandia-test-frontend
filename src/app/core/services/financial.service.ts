import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FinancialData } from '../../shared/components/financialcard/financial-data.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FinancialService {

  private apiUrl = 'https://62e152f8fa99731d75d44571.mockapi.io/api/v1/test-front-end-skandia/cards';

  constructor(private http: HttpClient) { }

  getFinancialData(): Observable<FinancialData> {
    return this.http.get<FinancialData>(this.apiUrl);
  }
}
