import { Component, EventEmitter, Output } from '@angular/core';
import { Pet } from '../../models/person.model';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.scss']
})
export class PetFormComponent {
  @Output() petAdded = new EventEmitter<Pet>();

  pet: Pet = new Pet();

  onSubmit() {
    console.log('Pet Data:', this.pet);
    if (this.pet.name && this.pet.age && this.pet.gender && this.pet.breed) {
      this.petAdded.emit(this.pet);
      this.resetForm();
    } else {
      console.error('All fields are required');
    }
  }
  

  resetForm() {
    this.pet = new Pet(); 
  }
}
