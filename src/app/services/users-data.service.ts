import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  constructor() { }

  getAnothersUsers () {
    return [
      {firstName : "Ben", lastName : "Alber"},
      {firstName : "Bennette", lastName : "Albertine"},
      {firstName : "BenBen", lastName : "AlberAlber"}
    ]
  }
}
