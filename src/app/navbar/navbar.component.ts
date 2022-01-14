import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public searchForm!:FormGroup;
  title: string = "";

  constructor( 
    private router:Router,
    private formBuilder: FormBuilder) { 
      this.searchForm = this.formBuilder.group({
        search: ''
      });
    }

  ngOnInit(): void {
  }

  public Search(): void{
    this.title=this.searchForm.get('search')?.value;
    if(this.title == ""){
      this.router.navigate(['/home']);
    }
    else{
    this.router.navigate(['/products/title/',this.title]);
       
    }
  }
  
}
