import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Objective } from './objetivecard.model';


@Component({
  selector: 'app-objectivecard',
  templateUrl: './objectivecard.component.html',
  styleUrl: './objectivecard.component.scss'
})


export class ObjectivecardComponent {

   @Input() objective: Objective = {
    title: 'Conocer mi sobrino',
    category: 'Bienestar',
    targetDate: 'Diciembre/2022',
    targetAmount: '$6.000.000',
    currentAmount: '$0'
  };
   @Input() showAssociateMessage: boolean = true;

}
