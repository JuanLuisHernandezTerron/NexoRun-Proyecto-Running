import { Component } from '@angular/core';
import { Evento } from './events.model';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent {
  evento1 = new Evento(1, "Carrera Popular", "Carrera popular gratuita de Bormujos", "Bormujos", new Date(20-2-2023), 0, "../../../../assets/img/Runner.jpg" )
  evento2 = new Evento(2, "Media maratón", "Media maratón en Camas", "Camas", new Date(21-3-2023), 7, "../../../../assets/img/Camas.jpg" )
  evento3 = new Evento(3, "Carrera Nocturna", "Carrera nocturna por Espartinas", "Espartinas", new Date(22-4-2023), 15, "../../../../assets/img/Espartinas.jfif" )
  evento4 = new Evento(4, "Maratón", "Gran maratón de Gines", "Gines", new Date(23-5-2023), 25, "../../../../assets/img/Camas.gines.jpeg" )
  evento5 = new Evento(5, "Carrera Popular", "Carrera popular anual de Mairena del Aljarafe", "Mairena del Aljarafe", new Date(24-6-2023), 1, "../../../../assets/img/MairenaDelAljarafe.jpg" )
  evento6 = new Evento(6, "Media maratón junior", "Media maratón junior en Tomares", "Tomares", new Date(25-7-2023), 5, "../../../../assets/img/Tomares.jpg" )

  eventos = [this.evento1, this.evento2, this.evento3, this.evento4, this.evento5, this.evento6];
}
