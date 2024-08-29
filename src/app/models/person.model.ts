export class Person {
  id: string = '';
  firstName: string = '';
  lastName: string = '';
  rut: string = '';
  phone: string = '';
  email: string = '';
  pets: Pet[] = [];
  showPets: boolean = false;
  showPetsForm: boolean = false;

  constructor(init?: Partial<Person>) {
    Object.assign(this, init);
  }
}

export class Pet {
  name: string = '';
  age: number = 0;
  gender: string = '';
  breed: string = '';

  constructor(init?: Partial<Pet>) {
    Object.assign(this, init);
  }
}
