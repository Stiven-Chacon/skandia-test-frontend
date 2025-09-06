import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ObjectivecardComponent } from '../../shared/components/objectivecard/objectivecard.component';
import { ProgressMessageComponentComponent } from "../../shared/components/progress-message-component/progress-message-component.component";
import { FinancialcardComponent } from "../../shared/components/financialcard/financialcard.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ObjectivecardComponent, ProgressMessageComponentComponent, FinancialcardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

}
