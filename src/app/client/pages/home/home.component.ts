import { Component } from '@angular/core';
import {ContactFormComponent} from '@client/components/contact-form/contact-form.component';

@Component({
  selector: 'app-home',
  imports: [ContactFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
