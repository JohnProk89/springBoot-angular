import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule} from '@angular/material/button';
import { UserserviceService } from '../../shared/services/userservice.service';

@Component({
  selector: 'app-user-register',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css'
})
export class UserRegisterComponent {

    userService = inject(UserserviceService);

    userRegisterForm = new FormGroup({
        username: new FormControl(),
        password: new FormControl()
    })

    onSubmit(value:any){
        console.log(value);
        const user = {
            username : this.userRegisterForm.get('username')?.value,
            password : this.userRegisterForm.get('password')?.value
        }
        this.userService.registerUser(user).subscribe({
            next: (response) => {
                console.log(response)
            },
            error: (response) => {
                console.log(response)

            }
        })
        this.userRegisterForm.reset();
    }
}
