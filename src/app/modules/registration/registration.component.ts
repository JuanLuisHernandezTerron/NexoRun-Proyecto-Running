import { Component } from '@angular/core';
import {Person} from './person.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  //Tallas para el atributo size del modelo Person
  sizes = ['XS','S','M','L','XL'];

  model = new Person(1, "", "", "",new Date(),"", this.sizes[2]);

  metodoPagos = ['Visa','Paysaftecard','Paymentwall']

  //Control de Formulario enviado por defecto a falsoIntroduzca su nombre

  submitted = false;

  // Una vez que el formulario se envía entonces se establece a enviado
  onSubmit(){this.submitted = true}
}
