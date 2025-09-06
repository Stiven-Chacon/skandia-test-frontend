import { Component, Input } from '@angular/core';
import { ContactInfo, FooterLink } from './footer.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  contactInfo: ContactInfo = {
    pbx: '658 4000 / 484 1300',
    nationalLine: '01 8000 517 526',
    corporateLine: '658 4123',
    address: 'Av. 19 # 109A - 30',
    city: 'Bogotá D.C.',
    country: 'Colombia',
  };

  footerLinks: FooterLink[] = [
    { label: 'Términos y Condiciones Canales de Servicio', href: '#' },
    { label: 'Defensoría del Consumidor Financiero', href: '#' },
    { label: 'Protección de Datos', href: '#' },
    { label: 'Definiciones Generales – Auto declaración FATCA y CRS', href: '#' },
    { label: 'Recomendaciones de Seguridad', href: '#' },
    { label: 'Ley de Transparencia', href: '#' },
    { label: 'Mapa del sitio', href: '#' },
  ];
}
