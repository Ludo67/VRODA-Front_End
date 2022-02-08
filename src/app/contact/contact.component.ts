import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  pform!: FormGroup;

  ngOnInit(): void {

  }

  onSubmit(): void{
    
    alert("Contact Test");
    
  }

  public ValidateEmail():void{
	let mailformat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  let email = document.getElementById("email").innerHTML;
	if(email.match(mailformat))
	{
		alert("This is not a valid email address");
		}

   
  }
  else(){
    document.getElementById('emailError').innerHTML = "Invalid email format. Please try again.";
  }

}
