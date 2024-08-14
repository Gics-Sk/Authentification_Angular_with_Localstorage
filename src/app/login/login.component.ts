import { Component } from '@angular/core';
import { FormGroup,Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  storageData: any;
password !: string;
user !: string;
constructor(private formBuilder:FormBuilder){
this.loginForm = this.formBuilder.group({
  user :['',Validators.required],
  password : ['',[
    Validators.required,
    Validators.minLength(8),
    Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
  ]]
});
}
onSubmit(user:string,password:string){
localStorage.setItem("User",user);
localStorage.setItem("Password",password);
console.log(localStorage.getItem("User"));

    
//   if(this.loginForm.valid){
//  return this.loginForm.value;
//   }else{
//     console.log('Formulaire non soumis');
//   }
}
}
