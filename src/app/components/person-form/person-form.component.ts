import { Component, EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent implements OnChanges {
  @Input() person: Person = {
    id: '',
    firstName: '',
    lastName: '',
    rut: '',
    phone: '',
    email: '',
    pets: [],
    showPets: false,
    showPetsForm: false 
  };

  @Output() personUpdated = new EventEmitter<Person>();
  @Output() personAdded = new EventEmitter<Person>();

  title: string = '';
  buttonText: string = '';
  isEditing: boolean = false;
emailError: any;
isFormValid: any;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['person'] && changes['person'].currentValue) {
      this.isEditing = !!this.person.id;
      this.title = this.isEditing ? 'Editar Persona' : 'Registrar Persona';
      this.buttonText = this.isEditing ? 'Actualizar' : 'Registrar';
    }
  }
  

  onSubmit() {
    if (this.isEditing) {
      console.log('Submitting update for person:', this.person);
      this.personUpdated.emit(this.person);
    } else {
      console.log('Submitting new person:', this.person);
      this.personAdded.emit(this.person);
    }
  }
  
  

  resetForm() {
    this.person = {
      id: '', 
      firstName: '',
      lastName: '',
      rut: '',
      phone: '',
      email: '',
      pets: [],
      showPets: false,
      showPetsForm: false 
    };
  }
  onFormChange() {

    if (this.person.email && !this.validateEmail(this.person.email)) {
      this.emailError = 'Correo electrónico inválido';
    } else {
      this.emailError = '';
    }
  
    
    this.isFormValid = this.person.firstName.trim() !== '' &&
                       this.person.lastName.trim() !== '' &&
                       this.person.rut.trim() !== '' &&
                       this.person.phone.trim() !== '' &&
                       this.person.email.trim() !== '' &&
                       !this.emailError;
  }

  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  
  
}
