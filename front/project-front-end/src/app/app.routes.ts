import { Routes } from '@angular/router';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserGetuserComponent } from './components/user-getuser/user-getuser.component';

export const routes: Routes = [
    { path : "user-register", component: UserRegisterComponent},
    { path : "user-get-user", component: UserGetuserComponent}
];
