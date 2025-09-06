import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ObjectivecardComponent } from '../../shared/components/objectivecard/objectivecard.component';
import { ProgressMessageComponentComponent } from "../../shared/components/progress-message-component/progress-message-component.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ObjectivecardComponent, ProgressMessageComponentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
   appData = {
    objective: {
      title: 'Comprar casa',
      targetAmount: 200000,
    },
    breadcrumbs: [
      { label: 'Inicio', link: '/' },
      { label: 'Objetivo', link: '/objetivo' },
    ],
    notifications: {
      success: {
        title: '¡Éxito!',
        subtitle: 'Objetivo creado correctamente',
      },
    },
    messages: {
      progress: {
        subtitle: 'Vas avanzando en tu meta',
        actionText: 'Ver más',
      },
    },
  };


  handleReviewObjective() {
    console.log('[v0] Revisar objetivo clicked');
  }
}
