import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrl: './verification.component.css'
})
export class VerificationComponent {
 
  @Input() verifpassword!:FormGroup; 
  rules = [
    { rule: 'Au moins 8 caractères', test: (password: string) => password.length >= 8 },
    { rule: 'Au moins une majuscule', test: (password: string) => /[A-Z]/.test(password) },
    { rule: 'Au moins une minuscule', test: (password: string) => /[a-z]/.test(password) },
    { rule: 'Au moins un chiffre', test: (password: string) => /\d/.test(password) },
    { rule: 'Au moins un caractère spécial', test: (password: string) => /[!@#$%^&*(),.?":{}|<>]/.test(password) },
  ]; 
  ng0nChanges(){
  
  
  }

}
