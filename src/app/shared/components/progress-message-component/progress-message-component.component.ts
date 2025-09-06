import { Component, Input } from '@angular/core';
import { ProgressMessage } from './progress-message.model';

@Component({
  selector: 'app-progress-message-component',
  imports: [],
  templateUrl: './progress-message-component.component.html',
  styleUrl: './progress-message-component.component.scss'
})
export class ProgressMessageComponentComponent {

  @Input() progressMessage: ProgressMessage = {
    targetAmount: '$6.000.000',
    objective: 'Conocer mi sobrino',
    subtitle: '¡A través de tus productos y nuestros rendimientos podremos lograrlo!',
    actionText: 'Asocia tus productos o adquiere uno nuevo.',
  };
}
