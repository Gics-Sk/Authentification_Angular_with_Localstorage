import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 
  myInput:any = document.getElementById("psw");
  letter:any  = document.getElementById("letter");
  capital:any  = document.getElementById("capital");
  number:any  = document.getElementById("number");
  length:any  = document.getElementById("length");
  constructor(private formbuilder:FormBuilder) {
    // this.passForm = this.formbuilder.group({
    //   name: new FormControl('', [Validators.required]),
    //   password: new FormControl('', [Validators.minLength(8),Validators.required, 
    //     Validators.pattern("[A-Z]")])
    // })
  }
  onBlur() {
    this.passForm.value.password = this.myInput.onblur((e:any) => e.document.getElementById('message').style.display = 'none' ) 
  }

  onFocus() {
    this.passForm.value.password = this.myInput.onfocus((el:any) => el.document.getElementById('message').style.display = 'block')
  }

  keyFunction() {
    this.passForm.value.password = this.myInput.onkeyup(() => {
      // Valider les lettres minuscules
    const lettresminuscules =  /[az]/g;
    if(this.myInput.match(lettresminuscules)) {
      this.letter?.classList.remove("invalid");
      this.letter?.classList.add("valid");
    }else {
      this.letter?.classList.remove('invalid');
      this.letter?.classList.add("valid");
    }
    // Valider les lettres majuscules
  const upperCaseLetters = /[A-Z]/g;
  if(this.myInput.value.match(upperCaseLetters)) {  
    this.capital.classList.remove("invalid");
    this.capital.classList.add("valid");
  } else {
    this.capital.classList.remove("valid");
    this.capital.classList.add("invalid");
  }

  // Valider les nombres
  const numbers = /[0-9]/g;
  if(this.myInput.value.match(numbers)) {  
    this.number.classList.remove("invalid");
    this.number.classList.add("valid");
  } else {
    this.number.classList.remove("valid");
    this.number.classList.add("invalid");
  }
  
  // Valider la longueur
  if(this.myInput.value.length >= 8) {
    this.length.classList.remove("invalid");
    this.length.classList.add("valid");
  } else {
    this.length.classList.remove("valid");
    this.length.classList.add("invalid");
  }
    })
  }

  passForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required,Validators.minLength(8),Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")]),
  });

  onSubmit() {
    console.log(this.passForm.value.name);
    console.log(this.passForm.value.password);
  }
}
