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

}
