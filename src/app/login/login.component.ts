import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;
  validationResult: any = {};
  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      user: ['', Validators.required],
      password: [''],
    });

     // Observez les changements dans le champ du mot de passe
     this.loginForm.get('password')?.valueChanges.subscribe(password => {
      this.validationResult = this.validatePassword(password);
    });
  }

validatePassword(password: string) {
    return {
      hasMinLength: password.length >= 8, // Vérifie que le mot de passe a au moins 8 caractères
      hasUpperCase: /[A-Z]/.test(password), // Vérifie la présence d'une majuscule
      hasLowerCase: /[a-z]/.test(password), // Vérifie la présence d'une minuscule
      hasNumber: /\d/.test(password), // Vérifie la présence d'un chiffre
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password) // Vérifie la présence d'un caractère spécial
    };
  }

  onSubmit() {
    const user = this.loginForm.get('user')?.value;
    const passwordControl = this.loginForm.get('password');
    if (passwordControl) {
      const password = passwordControl.value;
      // Store data in localStorage
      localStorage.setItem("User", JSON.stringify(user));
      localStorage.setItem("Password", JSON.stringify(password));
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Connexion Réussie",
        showConfirmButton: false,
        timer: 1500
      }).then(()=>{
        window.location.reload();
      });
      console.log(localStorage.getItem("User"));
     
    } else {
      console.log('Formulaire non soumis'); // Form is invalid, submission not processed
    }
    this.loginForm.reset();
  }
}
