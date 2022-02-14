import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
// import {nodemailer} from "nodemailer";
// import {Mail} from "nodemailer/lib/mailer";

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
    
  }
  

}
