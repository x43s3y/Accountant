import { Component } from '@angular/core';
import { ServicesABC } from '../services-abstract';
import { SERVICES } from '../services';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent {
  services = SERVICES;
  selectedService?: ServicesABC;

  onSelect(service: ServicesABC): void {
    this.selectedService = service;
  }
}
