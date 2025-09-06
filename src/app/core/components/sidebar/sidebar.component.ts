import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SidebarItem } from './sidebar.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
 @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();
 @Input() collapsed = false;

  menuItems: SidebarItem[] = [
    { icon: 'assets/icons/sidebar/home.svg', label: 'Inicio', href: '/' },
    { icon: 'assets/icons/sidebar/hoja1.svg', label: 'Contratos', href: '/objetivos' },
    { icon: 'assets/icons/sidebar/Tool.svg', label: 'Acciones', href: '/productos' },
    { icon: 'assets/icons/sidebar/star.svg', label: 'Objetivos', href: '/portafolio' },
    { icon: 'assets/icons/sidebar/money.svg', label: 'Herramientas', href: '/configuracion' },
    { icon: 'assets/icons/sidebar/talk2.svg', label: 'Servicio al cliente', href: '/ayuda' }
  ];

  onClose(): void {
    this.close.emit();
  }
}
