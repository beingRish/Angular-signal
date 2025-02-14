import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../models/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
userDetails: User = {
  email: '',
  password: ''
}

onSubmitForm(userForm: any) {
  console.log(userForm, this.userDetails);
  if(userForm.valid) {
    console.log(userForm.value, this.userDetails);
  }
}

}
