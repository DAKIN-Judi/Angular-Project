import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../../services/users-data.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  anotherUsers ;
  firstName : string;
  lastName : string;
  hobby : hobby;
  nbrClick : number;

  constructor(private userData : UsersDataService) {

    this.anotherUsers = userData.getAnothersUsers();
    this.firstName = "Judicaël";
    this.lastName = "DAKIN";
    this.nbrClick = 0;
    this.hobby = {
      hobit_1 : "Rollers",
      hobit_2 : "Games" ,
      hobit_3 : "Coding",
    };

  }

  ngOnInit(): void {
  }

  onClick() : void {
    switch (this.nbrClick) {

      case 0 :
        this.nbrClick++
        alert("My fisrt hobby is " + this.hobby.hobit_1 );
        break

      case 1 :
        this.nbrClick++
        alert("My second hobby is " + this.hobby.hobit_2 );
        break

      case 2 :
        this.nbrClick++
        alert("My third hobby is " + this.hobby.hobit_3 );
        break

      default :
        alert("Thanks for whatching");
        break

    }

  }


}

interface hobby {
  hobit_1 : string;
  hobit_2 : string ;
  hobit_3 : string;
}
