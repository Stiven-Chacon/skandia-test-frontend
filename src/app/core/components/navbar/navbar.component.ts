import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input() title: string = 'Plan Financiero Digital - FPX';
  @Output() menuClick = new EventEmitter<void>();

    onMenuClick() {
    this.menuClick.emit();
  }

}
