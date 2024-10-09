import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user-service.service';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  standalone:true,
  imports: [FormsModule] // <-- Add FormsModule here

})
export class UserFormComponent {

  user: User;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private userService: UserService) {
    this.user = new User();
  }

  onSubmit() {
    
     console.log("in onsubmit userform")
    this.userService.save(this.user).subscribe(result => this.gotoUserList());
    
  }

  gotoUserList() {
  
    console.log("in go to user list userform")
    this.router.navigate(['/users']);
    
  }
}