import { Component, inject } from '@angular/core';
import { UserserviceService } from '../../shared/services/userservice.service';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-user-getuser',
  imports: [MatCardModule],
  templateUrl: './user-getuser.component.html',
  styleUrl: './user-getuser.component.css'
})
export class UserGetuserComponent {
    userService = inject(UserserviceService);
    userName: string = '';
}
