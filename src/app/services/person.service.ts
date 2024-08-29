import { Injectable } from '@angular/core';
import { Person, Pet } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private people: Person[] = []; // Inicializa como un array vacío

  getPeople(): Person[] {
    return [...this.people];
  }

  addPerson(person: Person): void {
    console.log('Agregando persona:', person);
    const exists = this.people.some(p => p.rut === person.rut);
    if (!exists) {
      this.people.push(person);
    } else {
      console.error('Error: Persona con el mismo RUT ya existe.');
    }
  }
  

  updatePerson(updatedPerson: Person): void {
    const index = this.people.findIndex(p => p.id === updatedPerson.id);
    if (index !== -1) {
      this.people[index] = updatedPerson;
      // Si estás usando una base de datos o algún almacenamiento externo, también deberías actualizar ahí
    }
  }
  
    

  deletePerson(id: string): void {
    console.log('Deleting person with id:', id);
    const index = this.people.findIndex(person => person.id === id);
    console.log('Index found:', index);
    if (index !== -1) {
      this.people.splice(index, 1);
      console.log('People list after deletion:', this.people);
    } else {
      console.error('Error: Persona no encontrada para eliminación.');
    }
  }

  addPet(index: number, pet: Pet): void {
    console.log('Adding pet to person:', this.people[index]);
    if (!this.people[index].pets) {
      this.people[index].pets = [];
    }
    this.people[index].pets.push(pet);
    console.log('Updated pets:', this.people[index].pets);
  }
  
  
}
