import { Component } from '@angular/core';
import { User } from 'src/app/models/user'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    userModel = new User()

    onSubmit(){
      console.log(this.userModel)
    }
}
