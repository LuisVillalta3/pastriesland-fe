import {Component, ViewChild} from '@angular/core';
import {MatInput, MatInputModule, MatLabel} from '@angular/material/input';
import {NgIf} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';

@Component({
  selector: 'app-contact-form',
  imports: [
    ReactiveFormsModule,
    MatInputModule,
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
}
