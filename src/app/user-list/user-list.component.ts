import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user-service.service';
import { NgFor } from '@angular/common';

@Component({
  imports:[NgFor],
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  standalone:true
})
export class UserListComponent implements OnInit {

  users!: User[];

  constructor(private userService: UserService) {
    console.log("in list form")
  }

  ngOnInit() {
    
    console.log("im in there")
    this.userService.findAll().subscribe(data => {
      this.users = data;
      console.log(this.users);
    });
    
  }
}
