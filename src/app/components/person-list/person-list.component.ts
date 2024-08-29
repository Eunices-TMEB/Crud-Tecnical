import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';
import { Person, Pet } from '../../models/person.model';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {
  people: Person[] = [];
  showForm: boolean = false;
  currentPerson: Person | null = null;
  
  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.refreshPeopleList();
  }

  refreshPeopleList(): void {
    this.people = this.personService.getPeople();
    console.log('People list updated:', this.people);
  }
  
  
  

  toggleForm() {
    this.showForm = !this.showForm;
  
    if (this.showForm) {
      if (!this.currentPerson || !this.currentPerson.id) {
        this.currentPerson = new Person(); 
      }
    } else {
      this.currentPerson = null; 
    }
  }

  addPerson(person: Person): void {
    this.personService.addPerson(person);
    this.refreshPeopleList();
    this.closeForm();
  }

  updatePerson(person: Person): void {
    this.personService.updatePerson(person);
    this.refreshPeopleList(); 
    this.closeForm();
  }
  
  
  
  
  editPerson(index: number) {
    this.currentPerson = { ...this.people[index] }; 
    this.showForm = true;
  }

  deletePerson(id: string): void {
    this.personService.deletePerson(id);
    this.refreshPeopleList();
  }

  togglePetList(index: number) {
    this.people[index].showPetsForm = !this.people[index].showPetsForm;
  }
  

  addPet(index: number, pet: Pet): void {
    if (!this.people[index].pets) {
      this.people[index].pets = [];
    }
    this.people[index].pets.push(pet);
    console.log('Pet added:', pet);
    console.log('Updated pets list:', this.people[index].pets);
  }
  


  private closeForm() {
    this.showForm = false;
    this.currentPerson = null;
  }
}
